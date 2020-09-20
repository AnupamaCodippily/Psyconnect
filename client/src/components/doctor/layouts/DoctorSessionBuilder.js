import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { serverUrl } from "../../../globals";
function DoctorSessionBuilder(props) {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [number, setNumber] = useState(25);

  // NOTE -- Doing validation on the frontend needs to be changed when I have time

  const createSession = () => {
    // check for undefined date or time
    if (date === undefined || time === undefined) {
      alert("Invalid Date or Time");
      return;
    }

    // check current sessions if there is already a session on that day
    const currentSessions = props.sessions.sessions;
    currentSessions.forEach((session) => {
      let sessiondate = new Date(session.session.date);
      let dateString = `${sessiondate.getFullYear()}-${sessiondate.getMonth()}-${sessiondate.getDate()}`;

      if (date == dateString) {
        alert("There is already a session on that day");
        return;
      }
    });

    // check date to ensure the date has not passed already
    const today = new Date();
    const givenDate = new Date(date);

    if (
      today > givenDate &&
      today.getDate() != givenDate.getDate() &&
      today.getMonth() != givenDate.getMonth() &&
      today.getFullYear() != givenDate.getFullYear()
    ) {
      alert("The date has already passed");
      return;
    }

    const timeParts = [...time.match(/(\d{2}):(\d{2})/)];

    let theDate = new Date(
      givenDate.getFullYear(),
      givenDate.getMonth(),
      givenDate.getDate(),
      timeParts[1],
      timeParts[2]
    );
    //Create an ISOString to store in MongoDB database
    var isoDate = theDate.toISOString();

    // send data to the server
    fetch(`${serverUrl}/doctors/sessions/${props.doctor.doctorDetails._id}`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        dateTime: isoDate,
        max_patients: number,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) alert("session added");
        else alert("Error creating session, check date and time");
      })
      .catch((err) => {
        alert("Error in creating session");
      });
  };

  return (
    <div>

      <h3> Create a new session </h3>

      <Form>
        <Form.Group controlId="sessionBuilder.DateSelect">
          <Form.Label>Date: </Form.Label>
          <Form.Control
            onChange={(val) => setDate(val.target.value)}
            type="date"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="sessionBuilder.ControlSelect2">
          <Form.Label>Time: </Form.Label>
          <Form.Control
            onChange={(val) => setTime(val.target.value)}
            type="time"
            multiple
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="sessionBuilder.ControlTextarea1">
          <Form.Label>Maximum number of patients:</Form.Label>
          <Form.Control
            onChange={(val) => setNumber(val.target.value)}
            type="number"
            placeholder="25"
          />
        </Form.Group>
        <Button variant="primary" onClick={createSession}>
          Create
        </Button>
      </Form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  doctor: state.doctor,
  sessions: state.session,
});

export default connect(mapStateToProps, {})(DoctorSessionBuilder);
