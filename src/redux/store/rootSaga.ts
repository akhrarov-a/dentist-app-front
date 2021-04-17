import AuthSaga from '../modules/auth/sagas';

/**
 * Root Saga
 */
const rootSaga = [new AuthSaga()];

export default rootSaga;
