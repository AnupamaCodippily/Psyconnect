import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
// import Peer from "peerjs";

import Peer from "peerjs";

import Container from "react-bootstrap/Container";
import Video from "./Video";
import { connect } from "react-redux";

function DoctorClinic(props) {
  // const [yourID, setYourID] = useState("");
  const [users, setUsers] = useState({});
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);

  const userVideo = useRef();
  let patientVideo;
  const socket = useRef();

  const currentSessionId = props.clinic.items.appointment[0].session_id;

  const [currentPatientNumber, setCurrentPatientNumber] = useState(0);
  // const [currentAppointment, setCurrentAppointment] = useState({});

  // expose the session id, for the patients to connect to
  const doctorPeer = new Peer(currentSessionId, {
    host: "/",
    port: "3001",
    config: {'iceServers': [
      { url: 'stun:stun.l.google.com:19302' },
      { url: 'stun:stun1.l.google.com:19302' },
    ]}
  });


  console.log(doctorPeer);

  // const thisPeer = new Peer({
  //   initiator: true,
  //   stream: stream
  // })

  useEffect(() => {
    socket.current = io("/");

    // set the doctor's webcam visible to the doctor
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        if (userVideo.current) {
          userVideo.current.srcObject = stream;
        }
      });

    // as the doctor enters the session. the list of
    // appointments is sent tp the server
    // socket.current.emit("doctorEnterSession", {
    //   appointments: props.clinic.items.appointment,
    //   peer : thisPeer
    // });

    // set doctor receiving the call back
    doctorPeer.on("call", (call) => {
      alert(33)
      call.answer(stream);
      call.on("stream", (patientVideoStream) => {
        // patientVideo.srcObject = patientVideoStream;
        patientVideo = <Video stream={patientVideoStream}></Video>;
      });
      setCallAccepted(true);
    });

    // handling the addition of the first patient on entering the clinic
    socket.current.on("firstpatient", (appointment) => {
      connectToNextPatient(appointment);
    });

    socket.current.on("nextPatient", (data) => {
      // setCurrentAppointment(data.next_appointment);
      connectToNextPatient(data.next_appointment, data.peer);
    });

    socket.current.on("patientToConnect", (data) => {
      alert("fn -- patient to connect");
      connectToNextPatient(data.appointment, data.peer);
    });
  }, []);

  function nextPatient() {
    socket.current.emit("doctorEnterSession", {
      appointments: props.clinic.items.appointment,
      // peer : thisPeer
    });
    socket.current.emit("callnextpatient", currentSessionId);
  }

  function connectToNextPatient(appointment, peer) {
    setCurrentPatientNumber(appointment.patient_number);

    // connect the the patient with the current appointment

    try {
      console.log(doctorPeer)
      const call = (doctorPeer).call(appointment._id, stream);
      console.log(typeof(call))
    } catch (err) {
      alert(err)
    }

    new Peer(appointment._id, {host: '/', port:'3001'}).on('call', (stream) => {
      alert(1)
    })

    // const call = doctorPeer.call(currentSessionId, stream);

    // tp.call(appointment._id, stream)
    // alert(appointment._id)

    // call.on("stream", (patientVideoStream) => {
    //   alert("patient sent stream");
    // });

  }

  let UserVideo;
  if (stream) {
    UserVideo = <Video stream={userVideo} />;
  }

  // let patientVideo;
  if (callAccepted) {
    patientVideo = <Video stream={patientVideo} />;
  }

  let incomingCall;
  if (receivingCall) {
    incomingCall = <div></div>;
  }
  return (
    <Container>
      <h1> Dr.{props.doctor.name} Clinic </h1>
      <h5> Current session id: {currentSessionId} </h5>
      <h4>Patient number : {currentPatientNumber}</h4>
      <div>
        {UserVideo}
        {patientVideo}
      </div>
      <div>
        <h5>Connect to Next Patient</h5>
        <button onClick={nextPatient}>
          CONNECT to patient {currentPatientNumber}
        </button>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  doctor: state.doctor,
  sessions: state.session, // remember to remove this if unnecessary
  clinic: state.clinic,
});

export default connect(mapStateToProps, {})(DoctorClinic);
