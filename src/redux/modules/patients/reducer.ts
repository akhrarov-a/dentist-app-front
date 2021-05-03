import { getPatients } from './actions';
import { reducer } from 'redux-chill';
import PatientsReducerState from '../../../api/models/reducer-states/patients.state';

/**
 * Patients Reducer
 */
const patientsReducer = reducer(new PatientsReducerState()).on(
  getPatients.success,
  (state, { payload, total }) => {
    state.patients = payload;
    state.total = total;
  }
);

export default patientsReducer;
