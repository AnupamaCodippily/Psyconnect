import { CLINIC_NEXT_PATIENT } from "./types"
import { serverUrl } from '../../globals'



export function clinicNextPatient (sessionId) {
    return async function (dispatch) {
        // get the doctor's list of appointments
        fetch(`${serverUrl}/doctors/appointments/next/${sessionId}`)
        .then( res => res.json() )
        .then( result => {
            
            // filter out completed appointments
            result.appointment = result.appointment.filter(a => {
                return !a.completed
            })

            dispatch({
                type : CLINIC_NEXT_PATIENT,
                payload : result
            })
        })
    }
}

