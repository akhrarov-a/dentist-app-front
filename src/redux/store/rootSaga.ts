import AuthSaga from '../modules/auth/sagas';
import PatientsSaga from '../modules/patients/sagas';

/**
 * Root Saga
 */
const rootSaga = [new AuthSaga(), new PatientsSaga()];

export default rootSaga;
