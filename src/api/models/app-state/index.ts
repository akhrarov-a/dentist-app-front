import AuthReducerState from '../reducer-states/auth.state';
import PatientsReducerState from '../reducer-states/patients.state';

/**
 * App State Type
 */
export type AppState = {
  auth: AuthReducerState;
  patients: PatientsReducerState;
};
