import { AuthSaga } from '@auth';
import { PatientsSaga } from '@dentist/pages';

/**
 * Root Saga
 */
const rootSaga = [new AuthSaga(), new PatientsSaga()];

export default rootSaga;
