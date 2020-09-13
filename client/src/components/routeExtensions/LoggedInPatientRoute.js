import * as React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { logPatientIn } from '../../redux/actions/patientActions'
import history from '../../history'
// import DoctorHeader from '../doctor/layouts/DoctorHeader';

const LoggedInPatientRoute = ({component: Component , ...otherProps}) => {

  if (otherProps.patient.authenticated !== true) {
    history.push("/patients/login");
    document.location.reload();
  }
  

  const theComponent = () => {
    if (otherProps.patient.authenticated === true) 
      return <Component {...otherProps} />
  }

return(

  <>
    <Route
      render={otherProps => (
        <>
          { theComponent(otherProps)}
        </>
      )}
    />
  </>
)

      };

const mapStateToProps = (state) => ({
  patient : state.patient
})

export default connect (mapStateToProps, null)(LoggedInPatientRoute);

