import { LogIn } from '../../../api/models/log-in/log-in';
import { User } from '../../../api/models/user/user';
import { make } from 'redux-chill';

/**
 * Start up
 */
export const startUp = make('[auth] start up').stage('success').stage('fail');

/**
 * Get user
 */
export const getUser = make('[auth] get user')
  .stage('success', (payload: User) => payload)
  .stage('finish');

/**
 * Log in
 * */
export const logIn = make('[auth] sign in')
  .stage((payload: LogIn) => payload)
  .stage('success')
  .stage('fail', (error) => error);

/**
 * Log out
 */
export const logOut = make('[auth] log out');
