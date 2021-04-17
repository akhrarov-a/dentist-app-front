import { logIn } from './actions';
import { reducer } from 'redux-chill';
import AuthReducerState from '../../../models/reducer-states/auth.state';

/**
 * Authentication Reducer
 */
const authReducer = reducer(new AuthReducerState())
  .on(logIn.success, (state, payload) => {
    state.user = payload;
    state.isAuthenticated = true;
  })
  .on(logIn.fail, (state, payload) => {
    state.user = undefined;
    state.isAuthenticated = false;
  });

export default authReducer;
