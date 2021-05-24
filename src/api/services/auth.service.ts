import { LogIn } from '@api';
import { apiBaseUrl } from '@core';
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
      Authorization: `Bearer ${localStorage.getItem('idToken')}`
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

export { AuthService };
