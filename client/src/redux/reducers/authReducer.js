import { SET_USER_DOCTOR } from '../actions/types'

const initialState = {
    userType: 'guest'
}

export default function (state = initialState, action) {
    switch(action.type) {

        case SET_USER_DOCTOR : 
            return {
                ...state,
                userType : 'doctor'
            }

        default : 
            return state;
    }
}