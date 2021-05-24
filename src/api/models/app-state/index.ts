import { AuthReducerState } from '@auth/store/state';
import { PatientsReducerState } from '@dentist/pages/patients/store/state';

/**
 * App State Type
 */
type AppState = {
  auth: AuthReducerState;
  patients: PatientsReducerState;
};

export type { AppState };
