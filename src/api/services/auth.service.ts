import { AxiosRequestConfig } from 'axios';
import { LogIn } from '../models/log-in/log-in';
import { base_url } from './';

/**
 * Authentication service
 */
class AuthService {
  /**
   * Get axios
   */
  public constructor(
    private create: (
      config: AxiosRequestConfig
    ) => (config: AxiosRequestConfig) => any
  ) {}

  /**
   * Token
   */
  private token: string | null = localStorage.getItem('token');

  /**
   * Api
   */
  public api = this.create({
    withCredentials: true,
    baseURL: base_url,
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
