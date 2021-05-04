import { Payload, Saga } from 'redux-chill';
import { StoreContext } from '../../store/context';
import { call, put } from 'redux-saga/effects';
import { deletePatientById, getPatientById, getPatients } from './actions';

const perPage = 10;

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
  @Saga(deletePatientById)
  public *deletePatient(
    { id, callback }: Payload<typeof deletePatientById>,
    { patients }: StoreContext
  ) {
    try {
      const {
        data: { patient }
      } = yield call(patients.deletePatientById, id);

      yield put(deletePatientById.success(patient));
      yield call(callback);
    } catch (err) {
      console.log(err.message);
    }
  }
}

export default PatientsSaga;
