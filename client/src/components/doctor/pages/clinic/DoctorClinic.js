import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
// import Peer from "peerjs";

import Peer from "peerjs";
import { useHistory } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Video from "./Video";
import { connect } from "react-redux";
import DoctorNotepad from "../../layouts/DoctorNotepad";
import { clinicNextPatient } from '../../../../redux/actions/doctorClinicActions'

function DoctorClinic(props) {
  const history = useHistory();

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

  const currentAppointment = props.clinic.items.appointment[0]
  const currentSessionId = currentAppointment.session_id;

  const [currentPatientNumber, setCurrentPatientNumber] = useState(0);
  const [nextAppointment, setNextAppointment] = useState(null);
  // const [currentAppointment, setCurrentAppointment] = useState({});

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
    socket.current.emit("doctor joined", {
      session_id: currentSessionId,
      appointments: props.clinic.items.appointment
    });
    

    //executed when the next appointment is found or changed
    socket.current.on("new next appointment", (appointmentDetails) => {
      console.log('new patient joined')
      setNextAppointment(appointmentDetails);
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

  function connectToNextPatient() {

    setAppointmentComplete()

    if (nextAppointment._id) history.push(`/room/${nextAppointment._id}`);
    else {
      alert("No more patients online");
      history.push("/doctor/");
    }
  }

  function setAppointmentComplete () {
    fetch(`/appointments/complete/${currentAppointment._id}`)
      .then( res => {
        props.clinicNextPatient(currentSessionId)
      } )
      .catch(err => { console.log('error completing appointment') })
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
        {/* {UserVideo}
        {patientVideo} */}

        <video muted ref={props.yourVid} autoPlay playsInline />
        <video ref={props.otherVid} autoPlay playsInline />
      </div>

      <DoctorNotepad />

      <div>
        <hr></hr>
        <h5>Connect to Next Patient</h5>
        <Button variant="danger" onClick={connectToNextPatient}>
          Next Patient
        </Button>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  doctor: state.doctor,
  sessions: state.session, // remember to remove this if unnecessary
  clinic: state.clinic,
});

export default connect(mapStateToProps, {clinicNextPatient})(DoctorClinic);
