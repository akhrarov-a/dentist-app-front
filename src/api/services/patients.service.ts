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
      Authorization: `Bearer ${localStorage.getItem('idToken')}`
    }
  });

  /**
   * Get patients
   */
  public getPatients = ({
    selectedPage,
    search,
    perPage
  }: {
    selectedPage: number;
    search: string;
    perPage: number;
  }) =>
    this.api({
      url: `?page=${selectedPage}&perPage=${perPage}${
        search ? `&search=${search}` : ''
      }`,
      method: 'GET',
      ...this.getHeaders()
    });

  /**
   * Get patient by id
   */
  public getPatientById = (id: number) =>
    this.api({
      url: `/${id}`,
      method: 'GET',
      ...this.getHeaders()
    });

  /**
   * Delete patient by id
   */
  public deletePatientById = (id: number) =>
    this.api({
      url: `/${id}`,
      method: 'DELETE',
      ...this.getHeaders()
    });
}

export default PatientsService;
