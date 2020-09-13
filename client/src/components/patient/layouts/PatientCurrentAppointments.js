import React, {useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import AppointmentRow from './AppointmentRow';
import {getPatientAppointments} from '../../../redux/actions/patientActions'
import {connect} from 'react-redux'

function PatientCurrentAppointments(props) {
    
    // useEffect(() => {
    //     // props.getPatientAppointments(props.patient.patient_id);
    // }, [])


    var appointments = props.patient.patientAppointments;
    let appointmentsRows = []

    console.log(props)

    const setAppointmentRows = () => {
        appointments.forEach(
            appointment => {
                appointmentsRows.push(<AppointmentRow key={appointment._id} appointment={appointment} />)
            }
        )
    }

    setAppointmentRows()
    

    return (
        <div>
            <h4>

            Your Current Appointments
            </h4>

            <Table striped bordered hover>
                <thead>
                    <tr>
                    {/* <th>id</th> */}
                    <th>Doctor</th>
                    <th>Specialization</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {appointmentsRows.map( appointmentRow => {
                       return appointmentRow
                    } )}
                </tbody>
            </Table>

        </div>
    )
}

const mapStateToProps = state => ({
    patient : state.patient
})

export default connect (mapStateToProps, { getPatientAppointments }) (PatientCurrentAppointments);
