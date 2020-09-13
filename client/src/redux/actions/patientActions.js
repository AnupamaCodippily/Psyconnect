import { AUTHENTICATE_PATIENT, UNAUTHENTICATE_PATIENT, PUT_PATIENT_IN_SESSION, FETCH_PATIENT_APPOINTMENTS } from '../actions/types';
import { serverUrl } from '../../globals'


export function authenticatePatient() {
  return {
    type: AUTHENTICATE_PATIENT,
  };
}


export function unauthenticatePatient() {
  return {
    type: UNAUTHENTICATE_PATIENT,
  };
}


export function getPatientAppointments (patientId) {
  return async function (dispatch) {
    fetch(`/patient/appointments/${patientId}`)
      .then(res => res.json())
      .then( appointments => {

        dispatch({
            type : FETCH_PATIENT_APPOINTMENTS,
            payload : appointments
        }) 
      } )
      .catch( err => { alert("patient appointment error" + err) } )
  }
}


  export function logPatientOut () {
    return async function (dispatch) {
      dispatch(
        {
          type : UNAUTHENTICATE_PATIENT
        }
      )
    }
  }

  export function logPatientIn (email, password) {
    return async function (dispatch) {
        fetch(`${serverUrl}/patient/auth`,
         {
           method: 'POST',
           headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body : JSON.stringify({
            patientId : email,
            password: password
          })
         }) 
            .then(res => res.json())
            .then( result => {
              
              if (result.userIsValid === true) {
                dispatch(
                  {
                      type: AUTHENTICATE_PATIENT,
                      payload : {
                        username : email,
                        password : password,
                        authenticated: true,
                        patientDetails : result.patientDetails
                      }
                  }
                  )
              }

        } ).catch(err => { console.log("Error in Patient Actions" + err) })      
    }
}


export function setCurrentSessionActive (username, activeSession) {
  return async function (dispatch) {
    dispatch(
      {
        type : PUT_PATIENT_IN_SESSION,
        payload : {
          username: username,
          authenticated: true,
          currentAppointment: activeSession,
          inSession : true
        }
      }
    )
}
}