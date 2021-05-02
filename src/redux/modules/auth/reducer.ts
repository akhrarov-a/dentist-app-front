import { logIn } from './actions';
import { reducer } from 'redux-chill';
import AuthReducerState from '../../../api/models/reducer-states/auth.state';

/**
 * Authentication Reducer
 */
const authReducer = reducer(new AuthReducerState())
  .on(logIn, (state) => {
    state.error = null;
  })
  .on(logIn.success, (state, payload) => {
    state.user = payload;
    state.isAuthenticated = true;
    state.error = null;
  })
  .on(logIn.fail, (state, error) => {
    state.user = undefined;
    state.isAuthenticated = false;
    state.error = error;
  });

export default authReducer;
