import { AppState } from '../../../../api/models/app-state';
import { useSelector } from 'react-redux';

/**
 * Single Patient Appointment Page Props
 */
export const useSinglePatientAppointmentPage = () => {
  const { selectedPatient } = useSelector((state: AppState) => state.patients);

  return { selectedPatient };
};
