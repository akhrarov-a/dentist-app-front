import { Payload, Saga } from 'redux-chill';
import { StoreContext } from '../../store/context';
import {
  addPatient,
  deletePatientById,
  getPatientById,
  getPatients,
  updatePatientById
} from './actions';
import { call, put, takeEvery } from 'redux-saga/effects';

const perPage = 2;

/**
 * Patients Saga
 */
class PatientsSaga {
  /**
   * Get patients
   */
  @Saga(getPatients)
  public *getPatients(
    { selectedPage, search }: Payload<typeof getPatients>,
    { patients }: StoreContext
  ) {
    try {
      const { data } = yield call(patients.getPatients, {
        selectedPage,
        search,
        perPage
      });

      yield put(getPatients.success(data.patients, data.total));
    } catch (err) {
      console.log(err.message);
    }
  }

  /**
   * Get patient by id
   */
  @Saga(getPatientById)
  public *getPatient(
    { id }: Payload<typeof getPatientById>,
    { patients }: StoreContext
  ) {
    try {
      const {
        data: { patient }
      } = yield call(patients.getPatientById, id);

      yield put(getPatientById.success(patient));
    } catch (err) {
      console.log(err.message);
    }
  }

  /**
   * Delete patient by id
   */
  @Saga(takeEvery, deletePatientById)
  public *deletePatient(
    { id, callback }: Payload<typeof deletePatientById>,
    { patients }: StoreContext
  ) {
    try {
      yield call(patients.deletePatientById, id);

      yield put(deletePatientById.success());
      yield call(callback);
    } catch (err) {
      console.log(err.message);
    }
  }

  /**
   * Update patient by id
   */
  @Saga(updatePatientById)
  public *updatePatient(
    { data, callback }: Payload<typeof updatePatientById>,
    { patients }: StoreContext
  ) {
    try {
      const {
        data: { patient }
      } = yield call(patients.updatePatientById, data);

      yield put(updatePatientById.success(patient));
      yield call(callback);
    } catch (err) {
      yield put(updatePatientById.fail(err.response.data.message[0]));
    }
  }

  /**
   * Add patient
   */
  @Saga(addPatient)
  public *addPatient(
    { data, callback }: Payload<typeof addPatient>,
    { patients }: StoreContext
  ) {
    try {
      yield call(patients.addPatient, data);

      yield put(addPatient.success());
      yield put(getPatients(1, ''));
      yield call(callback);
    } catch (err) {
      const errorMessage = err.response.data.message;

      if (typeof errorMessage !== 'string') {
        yield put(addPatient.fail(errorMessage[0]));
      } else {
        yield put(addPatient.fail(errorMessage));
      }
    }
  }
}

export default PatientsSaga;
