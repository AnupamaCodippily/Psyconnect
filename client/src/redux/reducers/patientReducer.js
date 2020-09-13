import { AUTHENTICATE_PATIENT, UNAUTHENTICATE_PATIENT, PUT_PATIENT_IN_SESSION, FETCH_PATIENT_APPOINTMENTS } from '../actions/types'
import { LOCATION_CHANGE } from 'react-router-redux'

const initialState = {
    patient_id: null,
    username : '',
    // password: '',
    authenticated : false,
    inSession : false,
    sessionId : null,
    patientAppointments : null
}

export default function (state = initialState, action) {
    switch(action.type) {

        case LOCATION_CHANGE :
            return {
                ...state,
                patient_id: action.payload.patientDetails._id,
                username : action.payload.username,
                // password : action.payload.password,
                authenticated : action.payload.authenticated,
                inSession : false
            } ;
            break;

        case AUTHENTICATE_PATIENT : 

            return {
                ...state,
                patient_id: action.payload.patientDetails._id,
                username : action.payload.username,
                // password : action.payload.password,
                authenticated : action.payload.authenticated,
                inSession : false
            } ;
            break;

        case UNAUTHENTICATE_PATIENT : 
            return {
                ...state,
                username : null,
                patient_id: '',
                // password : action.payload.password,
                authenticated : false,
                inSession : false
            } ;
            break;

        case PUT_PATIENT_IN_SESSION:
            return {
                ...state,
                username : action.payload.username,
                // password : action.payload.password,
                authenticated : action.payload.authenticated,
                inSession : true,
                currentAppointment: action.payload.currentAppointment,
                sessionId : action.payload.currentAppointment.session_id,
                // sessionId : action.payload.doctorId
            }
        break;

        case FETCH_PATIENT_APPOINTMENTS:
            return{
                ...state,
                patientAppointments: action.payload
            }

        default : 
            return state;
    }
}