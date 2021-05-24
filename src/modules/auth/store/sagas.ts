import { Payload, Saga } from 'redux-chill';
import { StoreContext } from '@store/context';
import { call, put } from 'redux-saga/effects';
import { getUser, logIn, startUp } from './actions';
import moment from 'moment';

/**
 * Authentication Saga
 */
class AuthSaga {
  /**
   * Start up
   */
  @Saga(startUp)
  public *start() {
    const expireDate: any = localStorage.getItem('expireDate');

    if (!expireDate) return;

    const isAfter = moment().isAfter(expireDate);

    if (isAfter) return;

    yield put(startUp.success());
    yield put(getUser());
  }

  /**
   * Get user
   */
  @Saga(getUser)
  public *getUser(_: Payload<typeof getUser>, { auth }: StoreContext) {
    try {
      const {
        data: { user }
      } = yield call(auth.getUser);

      yield put(getUser.success(user));
    } catch (err) {
      console.log(err.message);
    } finally {
      yield put(getUser.finish());
    }
  }

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
        data: { accessToken, expiresIn }
      } = yield call(auth.logIn, { username, password });

      const expireDate = moment().add(expiresIn, 'days').format();

      yield call([localStorage, localStorage.setItem], 'idToken', accessToken);
      yield call(
        [localStorage, localStorage.setItem],
        'expireDate',
        expireDate
      );

      yield put(logIn.success());
      yield put(getUser());
    } catch (err) {
      yield put(logIn.fail('Invalid Credentials'));
    }
  }
}

export { AuthSaga };
