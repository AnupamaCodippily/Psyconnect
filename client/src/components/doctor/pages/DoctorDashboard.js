import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import DoctorHeader from "../layouts/DoctorHeader";
import Button from "react-bootstrap/Button";
import DoctorUpcomingSessions from "../layouts/DoctorUpcomingSessions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setDoctorInSession } from "../../../redux/actions/doctorActions";
import { clinicNextPatient } from "../../../redux/actions/doctorClinicActions";
import { setUserDoctor } from "../../../redux/actions/authActions";
import DoctorSessionBuilder from "../layouts/DoctorSessionBuilder";

function DoctorDashboard(props) {
  let sessionToday = false;
  let sessionTodayVals = null;
  let currentlyActiveSession = null;
  let currentSessionTime = null;

  const [hoursToNext, setHoursToNext] = useState("No sessions today");
  const [enterSessionButton, setEnterSessionButton] = useState(null);
  const [currentAppointmentLink, setCurrentAppointmentLink] = useState(null);
  let currentAppointments= []

  useEffect(() => {
    setCurrentlyActiveSession();
    setupAppointments();
    calcHoursToNextSession();
    props.clinicNextPatient(currentlyActiveSession._id);
  }, []);

  const setCurrentlyActiveSession = () => {
    // check all sessions today for a session that should already have started/ should start now
    props.sessions.sessions.forEach((session) => {
      let today = new Date().getDate();
      let sessionDate = new Date(session.session.date).getDate();
      let month = new Date().getMonth();
      let sessionMonth = new Date(session.session.date).getMonth();

      let time = new Date().getTime();
      let sessionTime = new Date(session.session.date).getTime();

      if (sessionDate === today && month == sessionMonth) {
        // then we have a session today, calculate the time
        sessionTodayVals = ` ${new Date(
          session.session.date
        ).getHours()}:${new Date(session.session.date).getMinutes()} `;
        sessionToday = true;

        if (sessionTime <= time) {
          currentlyActiveSession = session.session;

          props.setDoctorInSession(session.session);
        }
      }
    });
  };

  const setupAppointments = () => {
    // set the doctor's current appointments in the component state

    let appointments = filterAndSortAppointments(props.clinic.items.appointment)
    currentAppointments = [...appointments]
    // set the link variable, to connect to the appointment
    if (appointments.length > 0) {
      setCurrentAppointmentLink(
        <Link to={"/room/" + appointments[0]._id}>
          <Button role="doctor">ENTER CLINIC</Button>
        </Link>
      );
    }

    console.log(currentAppointments);
  };

  const filterAndSortAppointments = (appointmentList) => {
    // filter out completed appointments
    let list = appointmentList.filter((appointment) => {
      if (appointment.completed == false) return true;
    });

    // sort the filtered appointments by number

    list = list.sort((a, b) => {
      if (a.patient_number > b.patient_number) return 1;
      else if (b.patient_number > a.patient_number) return -1;

      return 0;
    });

    return list;
  };

  // calculates the number of hours to the next session
  const calcHoursToNextSession = () => {
    if (sessionToday) {
      setHoursToNext(`Session today at ${sessionTodayVals}`);
      if (currentlyActiveSession)
        setEnterSessionButton(
          <Button variant="success" onClick={setDoctorInSession}>
            {" "}
            Enter Session
          </Button>
        );
    } else {
      setHoursToNext("No sessions today");
    }
  };

  const setDoctorInSession = () => {
    props.clinicNextPatient(currentlyActiveSession._id);
  };

  return (
    <Container>
      <DoctorHeader />

      <h3> Upcoming Sessions </h3>
      <DoctorUpcomingSessions />
      <hr />
      <h2> Sessions </h2>
      <h3> {hoursToNext} </h3>
      <hr />

      <Link to="/doctor/clinic">{enterSessionButton}</Link>

      {currentAppointmentLink}

      {/* <Link to={currentAppointmentLink}>
            <Button role="doctor">ENTER CLINIC</Button>
            </Link> */}
      <hr />
      <Button> Create a new Session </Button>

      <DoctorSessionBuilder />
    </Container>
  );
}

const mapStateToProps = (state) => ({
  doctor: state.doctor,
  sessions: state.session,
  clinic: state.clinic,
});

export default connect(mapStateToProps, {
  clinicNextPatient,
  setDoctorInSession,
  setUserDoctor,
})(DoctorDashboard);
