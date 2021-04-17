import { Payload, Saga } from 'redux-chill';
import { StoreContext } from '../../store/context';
import { call } from 'redux-saga/effects';
import { logIn } from './actions';

/**
 * Authentication Saga
 */
class AuthSaga {
  /**
   * Log in
   */
  @Saga(logIn)
  public *logIn(
    { username, password }: Payload<typeof logIn>,
    { auth }: StoreContext
  ) {
    try {
      const {
        data: { user }
      } = yield call(auth.logIn, { username, password });

      console.log('Asadbek');
    } catch (err) {
      console.log(err.message);
    }
  }
}

export default AuthSaga;
