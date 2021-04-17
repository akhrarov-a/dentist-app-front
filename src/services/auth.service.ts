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
    baseURL: 'http://localhost:5000/auth'
  });

  /**
   * Log in
   */
  public logIn = ({ username, password }: LogIn) =>
    this.api({
      data: { login: username, password },
      method: 'POST',
      url: '/signin'
    });
}

export default AuthService;
