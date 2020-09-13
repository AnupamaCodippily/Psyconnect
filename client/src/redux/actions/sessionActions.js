import { FETCH_DOCTOR_SESSIONS } from '../actions/types'
import {serverUrl} from '../../globals'


export function fetchDoctorSessions (doctorId) {
    return async function (dispatch) {
        fetch(`${serverUrl}/doctors/sessions/${doctorId}`) 
            .then(res => res.json())
            .then( result => {
                dispatch(
                {
                    type: FETCH_DOCTOR_SESSIONS,
                    payload : result.sessionData
                }
            )
        } ).catch(err => { console.log(err) })      
    }
}