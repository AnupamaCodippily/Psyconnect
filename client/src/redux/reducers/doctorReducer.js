import { AUTHENTICATE_DOCTOR, UNAUTHENTICATE_DOCTOR, START_DOCTOR_SESSION, END_DOCTOR_SESSION } from '../actions/types'

const initialState = {
    username : '',
    authenticated : false,
    inSession : false,
    sessionId : null,
    doctorDetails : {}
}

export default function (state = initialState, action) {
    switch(action.type) {

        case AUTHENTICATE_DOCTOR : 
            return {
                ...state,
                username : action.payload.username,
                // password : action.payload.password,
                authenticated : action.payload.authenticated,
                inSession : false,
                doctorDetails : action.payload.doctorDetails
            }

        case UNAUTHENTICATE_DOCTOR : 
            return {
                username : "",
                authenticated : false,
                inSession: false,
                doctorDetails : {}
            }


        case START_DOCTOR_SESSION : 
            return {
                ...state,
                currentSessionDetails : action.payload
            }
        
        case END_DOCTOR_SESSION : 
            return {
                ...state,
                username : action.payload.username,
                // password : action.payload.password,
                authenticated : action.payload.authenticated,
                inSession : false,
                doctorDetails : action.payload.doctorDetails
            }

        

        default : 
            return state;
    }
}