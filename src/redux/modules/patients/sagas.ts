import { Payload, Saga } from 'redux-chill';
import { StoreContext } from '../../store/context';
import { call, put } from 'redux-saga/effects';
import { getPatientById, getPatients } from './actions';

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
        perPage: 10
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
}

export default PatientsSaga;
