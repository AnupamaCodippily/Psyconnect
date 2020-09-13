import React from 'react';
import './App.css';
import PatientDashboard from './components/patient/pages/PatientDashboard';
import DoctorDashboard from './components/doctor/pages/DoctorDashboard';
import DoctorClinic from './components/doctor/pages/clinic/DoctorClinic';
import PatientClinic from './components/patient/clinic/PatientClinic';
import PatientSearchDoctor from './components/patient/pages/PatientSearchDoctor'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Landing from './components/general/Landing';
import PatientLogin from './components/login/PatientLogin';
import DoctorLogin from './components/login/DoctorLogin'
import { Provider } from 'react-redux'
import configureStore from './redux/store';
import LoggedInPatientRoute from './components/routeExtensions/LoggedInPatientRoute';
import LoggedInDoctorRoute from './components/routeExtensions/LoggedInDoctorRoute';
import { PersistGate } from 'redux-persist/integration/react'
import Room from './components/clinic/Room';
import Clinic from './components/clinic/Clinic';


function App() {

  const { store, persistor }  = configureStore();

  return (
    <Provider store={store}>
      <Router>
      <PersistGate loading={null} persistor={persistor}>
      <div>
        <Switch>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/patients/login' component={PatientLogin} />
            <LoggedInPatientRoute exact path='/patients' component={PatientDashboard} />
            <LoggedInPatientRoute exact path='/patients/searchDoctor' component={PatientSearchDoctor} />
            <LoggedInPatientRoute exact path='/patients/clinic/:docId' component={PatientClinic} />
            <Route exact path='/doctor/login' component={DoctorLogin} />
            <LoggedInDoctorRoute exact path='/doctor' component={DoctorDashboard} />
            <LoggedInDoctorRoute exact path='/doctor/clinic' component={DoctorClinic} />
            <Route path='/room/:appointmentId' component={Room}></Route>
            <Route exact path='/clinic/:appointmentId' component={Clinic}></Route>
        </Switch>
      </div>
    </PersistGate>
    </Router>
    </Provider>
  );
}

export default App;
