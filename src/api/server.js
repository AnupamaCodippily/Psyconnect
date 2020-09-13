const express = require("express");
const app = express();
const cors = require("cors");
// const bodyParser = require('body-parser');
const path = require("path");

// app.use(express.static(path.join(__dirname, "../../client/build")));
app.use(express.static(path.join("/client/build")));

app.use(cors());

app.use(express.json());

app.use("/patient", require("./routes/patients"));
app.use("/doctors", require("./routes/doctors"));
app.use("/doctors/appointments/", require("./routes/appointments"));
app.use("/appointments/", require("./routes/appointments"));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"), function (
    err
  ) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// socket.io and webRTC
// require('dotenv').config();

const http = require("http");
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server, { origins: "*:*" });

const users = {};

const socketToRoom = {};

io.on("connection", (socket) => {



  socket.on("join room", roomID => {
    if (users[roomID]) {
        const length = users[roomID].length;
        if (length === 4) {
            socket.emit("room full");
            return;
        }
        users[roomID].push(socket.id);
    } else {
        users[roomID] = [socket.id];
    }
    socketToRoom[socket.id] = roomID;
    const usersInThisRoom = users[roomID].filter(id => id !== socket.id);

    socket.emit("all users", usersInThisRoom);
});

socket.on("sending signal", payload => {
    io.to(payload.userToSignal).emit('user joined', { signal: payload.signal, callerID: payload.callerID });
});

socket.on("returning signal", payload => {
    io.to(payload.callerID).emit('receiving returned signal', { signal: payload.signal, id: socket.id });
});

socket.on('disconnect', () => {
    const roomID = socketToRoom[socket.id];
    let room = users[roomID];
    if (room) {
        room = room.filter(id => id !== socket.id);
        users[roomID] = room;
    }
});










  // handle the doctor entering the session
  socket.on("doctorEnterSession", (data) => {
  
    console.log('doctor entering the session')
    const session_id = data.appointments[0].session_id;
    socket.join(session_id)
    io.sockets.adapter.rooms[session_id].appointments = data.appointments.sort(
      (a, b) => {
        if (a.patient_id < b.patient_id) return -1;
        if (a.patient_id > b.patient_id) return 1;
        return 0;
      }
    );

    // create a list of online patients and their peer data
    io.sockets.adapter.rooms[session_id].onlinePatients = [];

    socket.emit(
      "firstpatient",
      io.sockets.adapter.rooms[session_id].appointments[0]
    );

    socket.emit("doctorIsIn", { peer: data.peer })
    console.log(io.sockets.adapter.rooms[session_id])

    // request that the first patient enter the session
    // to do -- if patient is offline, proceed to next
    // socket.emit("nextPatient", { next_appointment: io.sockets.adapter.rooms[session_id].appointments[0] })
    io.sockets.adapter.rooms[session_id].current_appointment_index = 0;
    // console.log(io.sockets.adapter.rooms[session_id].appointments[0])
  });

  // socket to handle the next patient entering the session
  socket.on("patientEnterClinic", (data) => {

    var session_id = data.appointment.session_id

    // Check if room, session and appointment exist
    if (io.sockets.adapter.rooms[session_id] !== undefined) {
      // check if patient has an appointment which is one on the list (appointments array)
      var appointment = io.sockets.adapter.rooms[
        session_id
      ].appointments.filter((a) => {
        return a._id == data.appointment._id;
      });

      if (appointment.length > 0) {
        console.log("adding patient to room");
        io.sockets.adapter.rooms[session_id].onlinePatients.push(data);
        socket.join(data.session_id);
        // patient is in the session, but not connected via webRTC
      }

      // check if patient is the next patient
      // >> if the session id and the next appointment id match, add the patient to the session
      if (
        io.sockets.adapter.rooms[session_id].appointments[0]
          ._id == data.appointment._id
      ) {
        // tell doctor to connect to patient over webRTC
        console.log(`sending patient data to doctor`);
        socket.emit("patientToConnect", {
          appointment: data.appointment,
          peer: data.peer,
        });
      }
    } else {
      // then we add the first appointment
      console.log("patient entered, room empty");
      socket.join(session_id)
    }

    console.log(io.sockets.adapter.rooms[session_id])

    // if the session id matches, the patient should be on hold until their turn comes up
  });

  socket.on("patientExitClinic", (appointment_id) => {});

  // calling the next patient, requires changing the current appointment number
  // to do - improvement -- need to check if patient is online
  socket.on("callnextpatient", (session_id) => {
    // io.sockets.adapter.rooms[session_id].current_appointment_index += 1
    let i = io.sockets.adapter.rooms[session_id].current_appointment_index;
    console.log("attempting to call next patient");
    console.log(
      `${io.sockets.adapter.rooms[session_id].appointments.length} appointment(s) remaining`
    );
    if (i < io.sockets.adapter.rooms[session_id].appointments.length) {
      console.log("calling next patient");
      // socket.emit( "requestPeer", { appointment: io.sockets.adapter.rooms[session_id].appointments[i] } )

      socket.to(session_id).broadcast.emit('requestPeer', { appointment: io.sockets.adapter.rooms[session_id].appointments[i] } )
      console.log(io.sockets.adapter.rooms[session_id])

    }
  });
  
  socket.on( 'respondWithPeer', data => {
    var session_id = data.session_id
    console.log('patient peer received')
    socket.to(session_id).broadcast.emit("patientToConnect", {
        appointment: io.sockets.adapter.rooms[session_id].appointments[0],
        peer: data.peer
      });
  } ) 

  socket.on("callDoctor", (data) => {
    io.to(data.userToCall).emit("requestConnection", {
      signal: data.signalData,
      from: data.from,
    });
  });

  socket.on("DoctorAcceptCall", (data) => {
    io.to(data.to).emit("callAccepted", data.signal);
  });
});

server.listen(process.env.PORT || 3000);
// app.listen(process.env.PORT || 3000 )



// const users = {};

// const socketToRoom = {};

// io.on('connection', socket => {


// });

// server.listen(process.env.PORT || 8000, () => console.log('server is running on port 8000'));
