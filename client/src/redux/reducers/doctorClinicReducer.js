import { CLINIC_NEXT_PATIENT } from '../actions/types'

const initialState = {
    currentsessionId : null,
    currentPatientId : null
}

export default function (state = initialState, action) {
    switch(action.type) {
        case CLINIC_NEXT_PATIENT : 
            return {
                ...state,
                items: action.payload
            }

        default : 
            return state;
    }
}