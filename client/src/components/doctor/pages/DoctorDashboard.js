import React, { useEffect, useState } from 'react'
import  Container from 'react-bootstrap/Container'
import DoctorHeader from '../layouts/DoctorHeader'
import Button from 'react-bootstrap/Button'
import DoctorUpcomingSessions from '../layouts/DoctorUpcomingSessions'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { setDoctorInSession } from '../../../redux/actions/doctorActions'
import { clinicNextPatient } from '../../../redux/actions/doctorClinicActions'
import {setUserDoctor} from '../../../redux/actions/authActions'
import DoctorSessionBuilder from '../layouts/DoctorSessionBuilder'

function DoctorDashboard(props) {

    let sessionToday = false;
    let sessionTodayVals = null;
    let currentlyActiveSession = null
    let currentSessionTime = null;

    const [hoursToNext, setHoursToNext] = useState('No sessions today')
    const [enterSessionButton, setEnterSessionButton] = useState(null)

    useEffect(() => {
        setCurrentlyActiveSession();
        calcHoursToNextSession();
    }, [])

    const setCurrentlyActiveSession = () => {
        // check all sessions today for a session that should already have started/ should start now
        props.sessions.sessions.forEach(session => {
            let today = new Date().getDate()
            let sessionDate = new Date(session.session.date).getDate()
            let month = new Date().getMonth()
            let sessionMonth = new Date(session.session.date).getMonth()

            let time = new Date().getTime()
            let sessionTime = new Date(session.session.date).getTime();

            if ((sessionDate ===  today ) && month == sessionMonth) {
                // then we have a session today, calculate the time
                sessionTodayVals = ` ${ new Date(session.session.date).getHours() }:${ new Date(session.session.date).getMinutes() } `;
                sessionToday = true;

                if (sessionTime <=  time) {
                    currentlyActiveSession = session.session
                    props.setDoctorInSession(session.session)
                }
            }
        });
    }

// calculates the number of hours to the next session
    const calcHoursToNextSession = () => {
        if (sessionToday) {
           setHoursToNext(`Session today at ${sessionTodayVals }`)
           if (currentlyActiveSession) 
            setEnterSessionButton (
                <Button variant="success" onClick={setDoctorInSession}> Enter Session</Button>
            )
        }
        else {
            setHoursToNext('No sessions today')
        }
    }


    const setDoctorInSession = () => {
        props.clinicNextPatient(currentlyActiveSession._id);
    }


    return (    
        <Container>
            <DoctorHeader/>

            <h3> Upcoming Sessions </h3>
            <DoctorUpcomingSessions/>
            <hr/>
            <h2> Sessions </h2>
            <h3> { hoursToNext } </h3>
            <hr/>

            <Link to="/doctor/clinic">
            {enterSessionButton}
            </Link>

            <Link to='clinic/213'>
            <Button role="doctor">ENTER CLINIC</Button>
            </Link>
            <hr/>
            <Button> Create a new Session </Button>

            <DoctorSessionBuilder/>

        </Container>
    )
}

const mapStateToProps = state => ({
    doctor : state.doctor,
    sessions : state.session
})

export default connect (mapStateToProps, {clinicNextPatient, setDoctorInSession, setUserDoctor}) (DoctorDashboard);