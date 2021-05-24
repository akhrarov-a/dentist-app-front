import { User } from '@api';

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
  public user: User | null = null;

  /**
   * Log in errors
   */
  public error: string | null = null;
}

export { AuthReducerState };
