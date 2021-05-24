import { authReducer } from '@auth';
import { patientsReducer } from '@dentist/pages';

/**
 * Root Reducer
 */
const rootReducer = {
  auth: authReducer,
  patients: patientsReducer
};

export default rootReducer;
