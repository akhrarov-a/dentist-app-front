import { Patient } from '../patient/patient';

/**
 * Patients Reducer State
 */
class PatientsReducerState {
  /**
   * Patients
   */
  public patients: Patient[] | null = null;

  /**
   * Total pages
   */
  public total: number = 1;
}

export default PatientsReducerState;
