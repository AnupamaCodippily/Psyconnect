import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { connect } from "react-redux";
import history from '../../history'

import { logPatientIn, unauthenticatePatient  } from '../../redux/actions/patientActions'

function PatientLogin(props) {

    let [email, setEmail] = useState("");
    let [password, setPassword ] = useState("");

    const loginuser = () => {


        props.authenticatePatientLogin(email, password)
        
            
    }
if (props.patient.authenticated === true) {
            history.push("/patients/");
            document.location.reload();
        }
    return (
        <Container className='signup-form-container'>

            <div className='signup-form'>
                <Form>
                <Form.Group controlId="formBasicEmail" onChange={ e => { setEmail(e.target.value) } }>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={ e => { setPassword(e.target.value) } }/>
                </Form.Group>

                <Button variant="primary"onClick={loginuser} >
                    Submit
                </Button  >
                </Form>
            </div>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    patient: state.patient
})

const mapDispatchToProps = {
    authenticatePatientLogin: logPatientIn,
    unauthenticatePatientLogin: unauthenticatePatient,
}

export default connect (mapStateToProps, mapDispatchToProps )(PatientLogin)