const app = require('express')();
const http = require('http');
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);
const cors = require('cors');

const users = {}

const cors = require('cors');
const whitelist = ['http://localhost:3000'];
const corsOptions = {
  credentials: true, 
  origin: (origin, callback) => {
    if(whitelist.includes(origin))
      return callback(null, true)

      callback(new Error('Not allowed by CORS'));
  }
}

app.use(cors(corsOptions));
io.on('connection', socket => {

    if (!users[socket.id]) {
        users[socket.id] = socket.id;
    }
    socket.emit("clinicID", socket.id);
    io.sockets.emit("allUsers", users);
    socket.on('disconnect', () => {
        delete users[socket.id];
    })

    socket.on("callDoctor", (data) => {
        io.to(data.userToCall).emit('requestConnection', {signal: data.signalData, from: data.from});
    })

    socket.on("DoctorAcceptCall", (data) => {
        io.to(data.to).emit('callAccepted', data.signal);
    })
});

// server.listen(process.env.PORT || 3001 );
server.listen( 9000 );