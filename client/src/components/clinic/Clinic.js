import React from 'react'
import Peer from 'peerjs'
import DoctorClinic from '../doctor/pages/clinic/DoctorClinic'
import PatientClinic from '../patient/clinic/PatientClinic'
import { connect } from 'react-redux'


function Clinic(props) {

    let comp

    if (props.auth.userType == 'doctor') {
        comp = <DoctorClinic></DoctorClinic>
    }
    else {
        // patient
        comp = <PatientClinic/>
    }

    return (
        <div>
            {comp}
        </div>
    )
}


const mapStateToProps = state => ({
    auth: state.auth
})

export default connect ( mapStateToProps, {} )(Clinic)