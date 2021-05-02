import { LogIn } from '../models/log-in/log-in';
import { apiBaseUrl } from '../../utils/constants';
import axios from 'axios';

/**
 * Authentication service
 */
class AuthService {
  /**
   * Token
   */
  private token: string | null = localStorage.getItem('token');

  /**
   * Api
   */
  public api = axios.create({
    baseURL: apiBaseUrl,
    headers: {
      Authorization: this.token
    }
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
