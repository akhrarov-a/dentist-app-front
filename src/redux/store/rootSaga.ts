import AuthSaga from '../modules/auth/sagas';
import PatientsSaga from '../modules/patients/sagas';
import RouterSaga from '../modules/router/sagas';

/**
 * Root Saga
 */
const rootSaga = [new AuthSaga(), new PatientsSaga(), new RouterSaga()];

export default rootSaga;
