import { LogIn, User } from '@api';
import { make } from 'redux-chill';

/**
 * Start up
 */
const startUp = make('[auth] start up').stage('success').stage('fail');

/**
 * Get user
 */
const getUser = make('[auth] get user')
  .stage('success', (payload: User) => payload)
  .stage('finish');

/**
 * Log in
 * */
const logIn = make('[auth] sign in')
  .stage((payload: LogIn) => payload)
  .stage('success')
  .stage('fail', (error) => error);

/**
 * Log out
 */
const logOut = make('[auth] log out');

export { logOut, logIn, startUp, getUser };
