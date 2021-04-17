import { LogIn } from '../models/log-in/log-in';
import axios from 'axios';

/**
 * Authentication service
 */
class AuthService {
  /**
   * Api
   */
  private api = axios.create({
    baseURL: ''
  });

  /**
   * Log in
   */
  public logIn = (data: LogIn) =>
    this.api({ data, method: 'POST', url: '/sign-in' });
}

export default AuthService;
