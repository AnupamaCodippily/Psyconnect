import { FETCH_DOCTOR_APPOINTMENTS_TODAY } from '../actions/types'

export function fetchAppointmentsToday (doctorId, date) {
    return async function (dispatch) {
        fetch(`http://localhost:8001/doctors/appointments/${doctorId}/${date}`) 
            .then(res => res.json())
            .then( appointments => {
                dispatch(
                {
                    type: FETCH_DOCTOR_APPOINTMENTS_TODAY,
                    payload : appointments
                }
            )
        } ).catch(err => { console.log("Error in deprecated" + err) })      
    }
}