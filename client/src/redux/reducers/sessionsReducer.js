import { FETCH_DOCTOR_SESSIONS } from '../actions/types'

const initialState = {
    sessions : []
}

export default function (state = initialState, action) {
    switch(action.type) {

        case FETCH_DOCTOR_SESSIONS : 
            return {
                ...state,
                sessions: action.payload
            }

        default : 
            return state;
    }
}