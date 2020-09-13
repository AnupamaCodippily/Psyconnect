import { AUTHENTICATE_DOCTOR, UNAUTHENTICATE_DOCTOR, START_DOCTOR_SESSION, END_DOCTOR_SESSION, SET_USER_DOCTOR } from '../actions/types'
import { serverUrl } from '../../globals'

export function logDoctorIn(doctorId, password) {
    return async function (dispatch) {
        fetch(`${serverUrl}/doctors/auth`,
         {
           method: 'POST',
           headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body : JSON.stringify({
            doctorId : doctorId,
            password: password
          })
         }) 
            .then(res => res.json())
            .then( result => {

              
              if (result.userIsValid === true) {
                dispatch(
                  {
                      type: AUTHENTICATE_DOCTOR,
                      payload : {
                        username : doctorId,
                        authenticated: true,
                        doctorDetails : result.doctorDetails
                      }
                  }
                  )
                dispatch (
                  {
                    type : SET_USER_DOCTOR
                  }
                )
              }

        } ).catch(err => { console.log(err) })      
    }
}

export function logDoctorOut () {
  return async function (dispatch) {
    dispatch (
      {
        type: UNAUTHENTICATE_DOCTOR,
      }
    );
  }
}


// DOCTOR SESSIONS

export function setDoctorInSession (session) {
  return async function (dispatch) {
    dispatch (
      {
        type : START_DOCTOR_SESSION,
        payload : session
      }
    ) 
  }
}



export function setDoctorOutSession () {
  return async function (dispatch) {
    dispatch (
      {
        type : END_DOCTOR_SESSION
      }
    ) 
  }
}