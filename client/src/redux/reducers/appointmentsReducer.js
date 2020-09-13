import { FETCH_DOCTOR_APPOINTMENTS_TODAY } from '../actions/types'

const initialState = {
    appointments : []
}

export default function (state = initialState, action) {
    switch(action.type) {
        
        case FETCH_DOCTOR_APPOINTMENTS_TODAY : 
            return {
                ...state,
                items: action.payload
            }

        default : 
            return state;
    }
}