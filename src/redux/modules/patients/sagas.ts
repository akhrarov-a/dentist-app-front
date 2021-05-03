import { Payload, Saga } from 'redux-chill';
import { StoreContext } from '../../store/context';
import { call, put } from 'redux-saga/effects';
import { getPatients } from './actions';

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
}

export default PatientsSaga;
