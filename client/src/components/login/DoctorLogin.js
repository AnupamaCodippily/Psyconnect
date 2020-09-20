import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { connect } from "react-redux";
import history from '../../history'

import { logDoctorIn  } from '../../redux/actions/doctorActions'

function DoctorLogin(props) {

    let [doctorId, setDoctorId] = useState("");
    let [password, setPassword ] = useState("");

    const loginuser = () => {
        props.logDoctorIn(doctorId, password)
    }
if (props.doctor.authenticated === true) {
            history.push("/doctor/");
            document.location.reload();
        }
    return (
        <Container className='signup-form-container'>

            <div  className='signup-form'>
                <Form>
                <Form.Group controlId="formBasicEmail" onChange={ e => { setDoctorId(e.target.value) } }>
                    <Form.Label>Doctor Psyconnect ID</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={ e => { setPassword(e.target.value) } }/>
                </Form.Group>

                <Button variant="primary"onClick={loginuser} >
                    Log In
                </Button  >
                </Form>
            </div>

        </Container>
    )
}

const mapStateToProps = (state) => ({
    doctor: state.doctor
})

export default connect (mapStateToProps, {logDoctorIn} )(DoctorLogin)