import { combineReducers } from 'redux';
import authReducer from './authReducer';
import appointmentsReducer from './appointmentsReducer';
import patientReducer from './patientReducer';
import doctorReducer from './doctorReducer';
import doctorClinicReducer from './doctorClinicReducer';
import sessionsReducer from './sessionsReducer';

export default combineReducers({
    auth : authReducer,
    appointments : appointmentsReducer,
    session : sessionsReducer,
    patient : patientReducer,
    doctor : doctorReducer,
    clinic : doctorClinicReducer
})