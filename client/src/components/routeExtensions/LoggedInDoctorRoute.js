import * as React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import history from '../../history'
// import DoctorHeader from '../doctor/layouts/DoctorHeader';

const LoggedInDoctorRoute = ({component: Component , ...otherProps}) => {

  if (otherProps.doctor.authenticated !== true || otherProps.auth.userType !== 'doctor') {
    history.push("/doctor/login");
    document.location.reload();
  }
  
  const theComponent = () => {
    if (otherProps.doctor.authenticated === true) 
      return <Component {...otherProps} />
  }

  return(
    <>
      <Route
        render={otherProps => (
          <>
            {theComponent()}
          </>
        )}
      />
    </>
  )
};

const mapStateToProps = (state) => ({
  auth : state.auth,
  doctor : state.doctor
})

export default connect (mapStateToProps, null)(LoggedInDoctorRoute);