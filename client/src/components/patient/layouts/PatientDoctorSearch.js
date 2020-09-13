import React, {useState} from 'react'
import  Button from 'react-bootstrap/Button'
import  Form from 'react-bootstrap/Form'
import {Link } from 'react-router-dom'

export default function PatientDoctorSearch() {

    let [specialization, setSpecialization] = useState("Psychiatrist")
    let [doctorName, setDoctorName] = useState("")

    return (
        <div className="patient-search-doctor">

            <h2>Make an appointment</h2>
            <br></br>
            <hr></hr>
            <br></br>
            <Form>
            <Form.Group controlId="doctorSearchForm.doctorName">
                <Form.Label>Doctor Name:</Form.Label>
                <Form.Control type="text" placeholder="E.g. Jane Doe" onChange={e => { setDoctorName(e.target.value) }}></Form.Control>
            </Form.Group>
            <Form.Group controlId="doctorSearchForm.selectSpecialization">
                <Form.Label>Doctor's Specialization</Form.Label>
                <Form.Control as="select" onChange={e => { setSpecialization(e.target.value) }}>
                    <option>Psychiatrist</option>
                    <option>Child Psychiatrist</option>
                    <option>Psychologist</option>
                    <option>Child Psychologist</option>
                    <option>Therapist</option>
                </Form.Control>
            </Form.Group>
            
            <Button>
                 <Link params={{ doctor:doctorName, specialization: specialization}}
                   to={{
                       pathname: "/patients/searchDoctor",
                       state: {
                           doctorName: doctorName,
                           specialization: specialization
                           }
                        }
                    }
                           >
                    Search
                 </Link> 
            </Button>
            </Form>
        </div>
    )
}
