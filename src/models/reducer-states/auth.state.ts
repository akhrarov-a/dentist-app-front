import { User } from '../user/user';

/**
 * Authentication Reducer State
 */
class AuthReducerState {
  /**
   * Boolean defining is user authenticated
   */
  public isAuthenticated: boolean = false;

  /**
   * Object container all user data
   */
  public user: User | undefined;
}

export default AuthReducerState;
