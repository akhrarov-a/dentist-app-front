import {
  addPatient,
  deletePatientById,
  getPatientById,
  getPatients,
  updatePatientById
} from './actions';
import { reducer } from 'redux-chill';
import PatientsReducerState from '../../../api/models/reducer-states/patients.state';

/**
 * Patients Reducer
 */
const patientsReducer = reducer(new PatientsReducerState())
  .on(getPatients.success, (state, { payload, total }) => {
    state.patients = payload;
    state.total = total;
  })
  .on(getPatientById.success, (state, payload) => {
    state.selectedPatient = payload;
  })
  .on(deletePatientById.success, (state) => {
    state.selectedPatient = null;
  })
  .on(updatePatientById, (state) => {
    state.errors.update = null;
  })
  .on(updatePatientById.success, (state, payload) => {
    state.selectedPatient = payload;
    state.errors.update = null;
  })
  .on(updatePatientById.fail, (state, error) => {
    state.errors.update = error;
  })
  .on([addPatient, addPatient.success], (state) => {
    state.errors.add = null;
  })
  .on(addPatient.fail, (state, error) => {
    state.errors.add = error;
  });

export default patientsReducer;
