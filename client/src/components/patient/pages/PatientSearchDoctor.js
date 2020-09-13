import React, {useState, useEffect} from 'react'
import { serverUrl } from '../../../globals'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import PatientHeader from '../layouts/PatientHeader'
import SessionResultRows from '../layouts/SessionResultRows'


export default function PatientSearchDoctor(props) {

    useEffect(() => {
        searchDoctors()
    }, [])

    let [searchResults, setSearchResults] = useState(null)
    let sr = [];
    let doctorsFound = [];
    const { doctorName, specialization } = props.location.state


    const searchDoctors = () => {
        fetch(`${serverUrl}/doctors/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                doctorName: doctorName,
                specialization: specialization
            })
        })
            .then(res => res.json())
            .then(res => {
                if (res.success === true) {
                    doctorsFound = [...res.result]
                    sr = setDoctorSearchResults();
                    setSearchResults(sr)
                } else {
                    console.log('error occured')
                }
            })
            .catch(err => { console.log("Error fetching doctors" + err); })
    }


    const setDoctorSearchResults = () => {
        return doctorsFound.map(doctorFound => {
            return (
                <Card key={ doctorFound._id}>
                    <Card.Body>
                      Dr. { doctorFound.name}
                        |
                        { doctorFound.specialization }
                        | 
                        <hr></hr>
                        <SessionResultRows sessions={doctorFound.doctorSessions} />
                    </Card.Body>
                </Card>
            )
        })  
    }


    return (
        <Container>
            <PatientHeader />
            <h3> Searching for Dr. {doctorName} ({specialization}) </h3>
            <div id="search-results-doctors">
                {  searchResults }
            </div>
        </Container>
    )
}
