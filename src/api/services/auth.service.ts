import { LogIn } from '../models/log-in/log-in';
import { apiBaseUrl } from '../../utils/constants';
import axios from 'axios';

/**
 * Authentication service
 */
class AuthService {
  /**
   * Api
   */
  public api = axios.create({
    baseURL: `${apiBaseUrl}/auth`
  });

  /**
   * Get headers
   */
  public getHeaders = () => ({
    headers: {
      Authorization: localStorage.getItem('idToken')
    }
  });

  /**
   * Get user
   */
  public getUser = () =>
    this.api({
      method: 'GET',
      url: '/get-user',
      ...this.getHeaders()
    });

  /**
   * Log in
   */
  public logIn = ({ username, password }: LogIn) =>
    this.api({
      data: { login: username, password },
      method: 'POST',
      url: '/signin',
      ...this.getHeaders()
    });
}

export default AuthService;
