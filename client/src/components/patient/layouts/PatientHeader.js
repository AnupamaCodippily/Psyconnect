import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

import { connect } from 'react-redux'
import { logPatientOut } from '../../../redux/actions/patientActions'

function PatientHeader(props) {

    const logOut = () => {
        props.logPatientOut();
    }

    return (
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home" className="navbar-logo-psyconnect"> PsyconnectME - Patient </Navbar.Brand>
        <Nav className="mr-auto">
          
        </Nav>
        <Button variant="dark" onClick={logOut}>
            Sign Out    
        </Button>
      </Navbar>
    )
}

const mapStateToProps = state => ({
    patient : state.patient
})

export default connect (mapStateToProps, { logPatientOut })(PatientHeader);
