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

  /**
   * Selected patient
   */
  public selectedPatient: Patient | null = null;

  /**
   * Errors
   */
  public errors: { [key: string]: string | null } = {
    update: null,
    add: null
  };
}

export default PatientsReducerState;
