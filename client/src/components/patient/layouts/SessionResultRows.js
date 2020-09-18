import React from 'react'
import Button from 'react-bootstrap/Button'
import {serverUrl } from '../../../globals'
import {connect} from 'react-redux'


function SessionResultRows(props) {
    console.log(props.age)
    const divStyle = {
        "display": "flex",
        "flexDirection" : "row",
        "justifyContent" : "space-around"
    }

    const bookSession = (session) => {
        fetch(`${serverUrl}/appointments/`, {
            "method": 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            "body" : JSON.stringify({
                "sessionId" : session._id,
                "patientId" : props.patientId,
                "age": props.age
            })
        })
        .then(res => res.json())
        .then( res=> {
            if ( res.success === true && res.available === true ) {
                alert("Session booked successfully")
            }
            else if ( res.success === true && res.available === false ) {
                alert("All appointments booked")
            }
            else {
                alert("Error, recheck your dashbooard and try again")
            }
        }  ).catch( err => { alert("Error confirming session, recheck your dashboard and try again"+ err) })

    }

    const mappedSessions = props.sessions.map( session => {
        
                        const date = new Date(session.date)

                        const booked = (session.appointments >= session.patient_limit);

                        return(
                            <div style={divStyle} key={session.id}>
                                <div>{date.getDate()}/{date.getMonth() +1}/{date.getFullYear()}</div>
                                <div> 
                                    { date.getHours() >= 10? date.getHours() :  ("0" +date.getHours()) } 
                                    :  
                                    { date.getMinutes() >= 10? date.getMinutes() :  ("0" +date.getMinutes()) } 
                                </div>

                                <div>
                                    { session.appointments } / { session.patient_limit } bookings
                                </div>

                                <Button onClick={ () => {bookSession(session)}} variant={ booked? "danger" : "success" }>{ booked? "Session Full" : "Book Session" }</Button>
                            </div>
                        )
                    } )

    return (
        <div>
            {
               mappedSessions.map(session => {
                  return session
               })
            }
        </div>
    )
}

const mapStateToProps = state => ({
    patientId : state.patient.patient_id,
    age: state.patient.age
})

export default connect (mapStateToProps, {}) ( SessionResultRows )