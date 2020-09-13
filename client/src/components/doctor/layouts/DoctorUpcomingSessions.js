import React, {useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import SessionRow from './SessionRow';

import { connect } from 'react-redux';
import { fetchDoctorSessions } from '../../../redux/actions/sessionActions';

function DoctorUpcomingSessions(props) {

    useEffect(() => {
         props.fetchDoctorSessions(props.doctorId)
        }, [])
        
    var sessionsRows = [];
    

    const setSessionsRows = () => {
        sessionsRows = props.sessions.map( (session) => {
            if (new Date(session.session.date) >= new Date()) 
                return <SessionRow patientsCount={ session.appointmentCount } session={session.session} />
        } );
    }
    
    if (props.sessions) {
        setSessionsRows();
    }

    return (
        <Table>
            <thead>
                <th>
                    Session Id
                </th>
                <th>
                    Date
                </th>
                <th>
                    Starting Time
                </th>
                <th>
                    No. of Patients
                </th>
            </thead>
            <tbody>
                {
                    sessionsRows.map( sessionRow => {
                        return sessionRow
                    } )
                }
            </tbody>
        </Table>
    )
}

const mapStateToProps = state => ({
    doctorId : state.doctor.doctorDetails._id,
    appointments : state.appointments.items,
    sessions : state.session.sessions
})

export default connect (mapStateToProps, { fetchDoctorSessions } )(DoctorUpcomingSessions);
