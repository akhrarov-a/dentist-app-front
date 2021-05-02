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

  /**
   * Log in errors
   */
  public error: string | null = null;
}

export default AuthReducerState;
