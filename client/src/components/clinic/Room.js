import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";
import Container from 'react-bootstrap/Container'

import { connect } from "react-redux";
import DoctorClinic from "../doctor/pages/clinic/DoctorClinic";
import PatientClinic from "../patient/clinic/PatientClinic";

const Room = (props) => {
    const [peers, setPeers] = useState([]);
    const socketRef = useRef();
    const userVideo = useRef();
    const peersRef = useRef([]);
    const roomID = props.match.params.roomID;

    const otherVideo = useRef()
    const [patients, setPatients] = useState([])


    const appointment_id = props.match.params.appointmentId
    const patient_id =  props.clinic.items.appointment[0].patient_id
    const appointment =  props.clinic.items.appointment[0]


    useEffect(() => {
        socketRef.current = io.connect("/");

        // get this user's webcam video stream
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
            userVideo.current.srcObject = stream;
            socketRef.current.emit("join room", roomID);
            socketRef.current.on("all users", users => {
                // create an empty array to store the other peers
                const peers = [];

                // add each user to this empty array
                users.forEach(userID => {
                    const peer = createPeer(userID, socketRef.current.id, stream);
                    peersRef.current.push({
                        peerID: userID,
                        peer,
                    })
                    peers.push(peer);
                })

                // set the peers array to the array sent
                setPeers(peers);
            })

            socketRef.current.on("user joined", payload => {
                const item = peersRef.current.find(p => p.peerID === payload.callerID);
                if(!item) {
                console.log('user joined')
                const peer = addPeer(payload.signal, payload.callerID, stream);
                peersRef.current.push({
                    peerID: payload.callerID,
                    peer,
                })
                // setPeers([peer])
                setPeers(users => [...users, peer]);}
            });

            socketRef.current.on("receiving returned signal", payload => {
                console.log("receiving returned signal")
                const item = peersRef.current.find(p => p.peerID === payload.id);
                item.peer.signal(payload.signal);
            });
        })
    }, []);

    function createPeer(userToSignal, callerID, stream) {
        console.log('creating peer')
        const peer = new Peer({
            initiator: true,
            trickle: false,
            config: { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }, { urls: 'stun:global.stun.twilio.com:3478?transport=udp' }] },
            stream,
        });

        peer.on("signal", signal => {
            console.log('sending signal')
            socketRef.current.emit("sending signal", { userToSignal, callerID, signal })
        })

        // added
        peer.on('stream', stream => {
            console.log('received stream')
            otherVideo.current.srcObject = stream
        })


        return peer;
    }

    function addPeer(incomingSignal, callerID, stream) {
        console.log('adding peer')
        const peer = new Peer({
            initiator: false,
            trickle: false,
            config: { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }, { urls: 'stun:global.stun.twilio.com:3478?transport=udp' }] },
            stream,
        })

        peer.on("signal", signal => {
            socketRef.current.emit("returning signal", { signal, callerID })
        })

        // added
        peer.on('stream', stream => {
            otherVideo.current.srcObject = stream
        })

        peer.signal(incomingSignal);

        return peer;
    }



    if (props.auth.userType === 'doctor') {
        return ( <DoctorClinic yourVid={ userVideo }  otherVid={otherVideo} appointment={appointment} appointmentId= {appointment_id} patientId={patient_id} /> )
    }
    else {
        return ( <PatientClinic  yourVid={ userVideo } otherVid={otherVideo} />)
    }
};

const mapStateToProps = state => ({
    auth : state.auth,
    clinic: state.clinic
})

export default connect (mapStateToProps, {})(Room);