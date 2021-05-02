import { apiBaseUrl } from '../../utils/constants';
import axios from 'axios';

/**
 * Patients service
 */
class PatientsService {
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
}

export default PatientsService;
