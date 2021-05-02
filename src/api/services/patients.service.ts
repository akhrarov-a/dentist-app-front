import { AxiosRequestConfig } from 'axios';
import { base_url } from './';

/**
 * Patients service
 */
class PatientsService {
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
}

export default PatientsService;
