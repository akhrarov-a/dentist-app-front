import { apiBaseUrl } from '../../utils/constants';
import axios from 'axios';

/**
 * Patients service
 */
class PatientsService {
  /**
   * Api
   */
  public api = axios.create({
    baseURL: `${apiBaseUrl}/patients`
  });

  /**
   * Get headers
   */
  public getHeaders = () => ({
    headers: {
      Authorization: localStorage.getItem('idToken')
    }
  });
}

export default PatientsService;
