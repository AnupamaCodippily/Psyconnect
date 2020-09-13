import React from 'react'
import { Button } from 'react-bootstrap'

export default function AppointmentRow(props) {

    var date = new Date(props.appointment.sessionDetails.date);
    

    return (
        <tr>
            {/* <td> {props.appointment._id} </td> */}
            <td> Dr. { props.appointment.doctorDetails.name } </td>
            <td>  { props.appointment.doctorDetails.specialization } </td>
            <td> {date.getDate()}/{date.getMonth()}/{date.getFullYear()} </td>
            <td> {date.getHours()}:{date.getMinutes()}  </td>
            <td className="cancel-appointment-td" > { props.appointment.completed ? "" :  <Button variant="danger">Cancel Appointment</Button>} </td>
        </tr>
    )
}
