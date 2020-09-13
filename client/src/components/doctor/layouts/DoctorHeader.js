import React from 'react'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import { logDoctorOut } from '../../../redux/actions/doctorActions'
import { connect } from 'react-redux'

function DoctorHeader(props) {

    return (
        <div>
        <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home" className="navbar-logo-psyconnect"> PsyconnectME - Dr. { props.doctorDetails.name }  </Navbar.Brand>
        <Nav className="mr-auto">
          
        </Nav>
        <Button variant="dark" onClick={ props.logDoctorOut }>
            Sign Out    
        </Button>
      </Navbar>
        </div>
    )
}

const mapStateToProps =  state  => ({
    doctorDetails : state.doctor.doctorDetails
}) 

export default connect (mapStateToProps, {logDoctorOut}) (DoctorHeader)