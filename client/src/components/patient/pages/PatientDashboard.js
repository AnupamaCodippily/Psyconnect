import React, { useState } from "react";
import PatientDoctorSearch from "../layouts/PatientDoctorSearch";
import PatientCurrentAppointments from "../layouts/PatientCurrentAppointments";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import PatientHeader from "../layouts/PatientHeader";
import {
  setCurrentSessionActive,
  logPatientOut,
  getPatientAppointments,
  patientAge
} from "../../../redux/actions/patientActions";
import { useEffect } from "react";

function PatientDashBoard(props) {


  let [patientCurrentAppointments, setPatientCurrentAppointments] = useState(
    null
  );
  let [nextAppointmentDateTime, setNextAppointmentDateTime] = useState();

  const defaultHourLimit = 24;
  let activeSessionAvailable = false;
  let activeSession = null;
  let nextAppointment;
  const [appointmentLink, setAppointmentLink] = useState(null);

  useEffect(() => {
    props.getPatientAppointments(props.patient.patient_id);
    setPatientCurrentAppointments(<PatientCurrentAppointments />);

    const temp_nadt = getNextAppointmentDateTime();
    setNextAppointmentDateTime(temp_nadt);

    getAppointmentLink();

    getPatientAge()

    // activeSessionAvailable = false;
  }, []);

  function getPatientAge() {
    fetch(`/patient/age/${props.patient.patient_id}`)
      .then(res => res.json())
      .then(res => { props.patientAge(res.age);})
  }

  // put the patient in a session with the doctor using the session id
  const putInSession = () => {
    props.setCurrentSessionActive(props.patient.username, activeSession);
  };

  const getNextAppointmentDateTime = () => {
    let appointments = props.patient.patientAppointments;
    //sort the appointments array by date
    let sortedByDate = appointments
      .slice()
      .sort(
        (a, b) =>
          new Date(a.sessionDetails.date) - new Date(b.sessionDetails.date)
      );

    // filter out past appointments
    sortedByDate = sortedByDate.filter((data) => {
      let thisDate = new Date();
      let date = new Date(data.sessionDetails.date);
      return (
        date >= thisDate ||
        (date.getFullYear() == thisDate.getFullYear() &&
          date.getMonth() == thisDate.getMonth() &&
          date.getDate() == thisDate.getDate() &&
          thisDate.getHours() - date.getHours() <= defaultHourLimit)
      );
    });

    if (sortedByDate.length > 0)
      nextAppointment = new Date(sortedByDate[0].sessionDetails.date);
    else return `No upcoming appointments`;

    let date = new Date();
    let today = date.getDate();
    let thisMonth = date.getMonth();
    let thisYear = date.getFullYear();

    // check if the appointment is today
    if (
      nextAppointment.getFullYear() == thisYear &&
      nextAppointment.getMonth() == thisMonth &&
      nextAppointment.getDate() == today
    ) {
      // get the number of hours until the appointment
      let timeRemaining = nextAppointment.getHours() - date.getHours();
      activeSessionAvailable = timeRemaining < 1;
      activeSession = timeRemaining >= 1 ? null : sortedByDate[0];
      return ` Youra next appointment is in less than ${
        timeRemaining > 1 ? timeRemaining : 1
      } hour(s) `;
    } else {
      // calculate days
      let daysRemaining = Math.floor(
        (Date.parse(nextAppointment) - Date.parse(new Date())) / 86400000
      );
      return `Your next appointment is in ${daysRemaining} day(s) `;
    }
  };

  const getAppointmentLink = () => {
    if (activeSessionAvailable){
        setAppointmentLink(
          <Link
            to={"/room/" + activeSession._id}
            className="nav-link"
          >
            <Button variant="success" onClick={putInSession}>
              Call Doctor
            </Button>
          </Link>
        );
    }
  };

  return (
    <Container>
      <PatientHeader />
      <br />
      {patientCurrentAppointments
        ? patientCurrentAppointments
        : "No Appointments"}
      <br />
      <hr />
      <br></br>

      <hr />
      <h3> {nextAppointmentDateTime} </h3>

      {appointmentLink}

      <br></br>
      <hr />

      <PatientDoctorSearch />
    </Container>
  );
}

const mapStateToProps = (state) => ({
  patient: state.patient,
});

export default connect(mapStateToProps, {
  patientAge,
  setCurrentSessionActive,
  logPatientOut,
  getPatientAppointments,
})(PatientDashBoard);
