import authReducer from '../modules/auth/reducer';
import patientsReducer from '../modules/patients/reducer';

/**
 * Root Reducer
 */
const rootReducer = {
  auth: authReducer,
  patients: patientsReducer
};

export default rootReducer;
