import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
// import Peer from "peerjs";

import Peer from 'peerjs'

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Video from "./Video";
import { connect } from "react-redux";

function PatientClinic(props) {
  const [yourID, setYourID] = useState("");
  const [users, setUsers] = useState({});
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);

  const userVideo = useRef();
  const partnerVideo = useRef();
  const socket = useRef();

  // console.log(props.patient)
  let doctorSessionId = props.patient.currentAppointment.session_id;

  // expose the patient's appointment id, for the doctor to connect to
  const patientPeer = new Peer(props.patient.currentAppointment._id, {
    host: "/",
    port: "3001"
  });
  // alert(patientPeer.id)
  const patientVideo = useRef();
  const doctorVideo = useRef();


  patientPeer.on('open', id => {
      alert('dev -- opening patient peer')
       // emit a message that the patient has entered the session
       socket.current.emit("patientEnterClinic",{ appointment: props.patient.currentAppointment, peer: null})

  })



  useEffect(() => {
    socket.current = io("/");

    // setting the user camera and mic
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        if (userVideo.current) {
          userVideo.current.srcObject = stream;
        }
      });




    socket.current.on(`requestPatientConnect`, (data) => {
      if (data.appointment_id == props.patient.patientAppointments[0]._id) {
        // connect the patient to the doctor
        socket.current.emit("patientEnterClinic", {
          session_id: doctorSessionId,
          appointment_id: data.appointment_id
        });
        // acceptDoctorCall();
      }
    });


 

    // 
    socket.current.on('requestPeer', data => {
      alert(`peer sent`)
      if (data.appointment._id  == props.patient.currentAppointment._id)  {
        socket.current.emit("respondWithPeer", { peer: null, session_id: props.patient.currentAppointment.session_id})
      }
    })

    socket.current.on('doctorIsIn', (peer) =>{
      // thatPeer = peer
    })

  }, []);

  patientPeer.on('call', (call) => {
    call.answer(stream)
    alert(`The doctor is calling you`)
    // call.answer(stream);
    // call.on("stream", (userVideoStream) => {
    //   partnerVideo.current.srcObject = userVideoStream;
    //   partnerVideo.addEventListener("loadedmetadata", () => {
    //     partnerVideo.play();
    //   });
    // });
  });


  let UserVideo;
  if (stream) {
    UserVideo = <Video stream={userVideo} />;
  }

  let PartnerVideo;
  if (callAccepted) {
    PartnerVideo = <Video stream={partnerVideo} />;
  }

  let incomingCall;
  if (receivingCall) {
    incomingCall = (
      <div>
        <h1>{caller} is calling you</h1>
        {/* <button onClick={acceptCall}>Accept</button> */}
      </div>
    );
  }
  return (
    <Container>
      <h1>Clinic session - Session Id : {doctorSessionId}</h1>
      <h4>Patient number : {props.patient.currentAppointment.patient_number}</h4>
      <h4>appointment id : {props.patient.currentAppointment._id}</h4>
      <div>
        {UserVideo}
        {PartnerVideo}
    
      </div>

      <div>{incomingCall}</div>
      <div>
        <Button variant="danger">Leave Session</Button>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  patient: state.patient,
});

export default connect(mapStateToProps, {})(PatientClinic);
