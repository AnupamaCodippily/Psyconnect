import { SET_USER_DOCTOR } from '../actions/types'

export function setUserDoctor (doctorId) {
    return async function (dispatch) {
        
                dispatch(
                {
                    type: SET_USER_DOCTOR
                }
                )
    
}}