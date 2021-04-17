import axios from 'axios';

/**
 * Patients service
 */
class PatientsService {
  /**
   * Api
   */
  private api = axios.create({
    baseURL: ''
  });
}

export default PatientsService;
