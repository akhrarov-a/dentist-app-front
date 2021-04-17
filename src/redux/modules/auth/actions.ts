import { User } from '../../../models/user/user';
import { make } from 'redux-chill';

/**
 * Log in action
 */
export const logIn = make('[authentication] sign in')
  .stage((payload: { username: string; password: string }) => payload)
  .stage('success', (payload: User) => payload)
  .stage('fail', (payload) => payload);
