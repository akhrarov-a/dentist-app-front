import { getUser, logIn, logOut, startUp } from './actions';
import { reducer } from 'redux-chill';
import AuthReducerState from '../../../api/models/reducer-states/auth.state';

/**
 * Authentication Reducer
 */
const authReducer = reducer(new AuthReducerState())
  .on([startUp.success, logIn.success], (state) => {
    state.isAuthenticated = true;
    state.error = null;
  })
  .on(getUser.success, (state, payload) => {
    state.user = payload;
  })
  .on(logIn, (state) => {
    state.error = null;
  })
  .on(logIn.fail, (state, error) => {
    state.error = error;
  })
  .on(logOut, (state) => {
    state.isAuthenticated = false;
    state.error = null;
    state.user = null;

    localStorage.removeItem('idToken');
    localStorage.removeItem('expireDate');
  });

export default authReducer;
