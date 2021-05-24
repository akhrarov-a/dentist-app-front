import { AppState } from '@api';
import { useSelector } from 'react-redux';

/**
 * Single Patient Appointment Page Props
 */
const useSinglePatientAppointmentPage = () => {
  const { selectedPatient } = useSelector((state: AppState) => state.patients);

  return { selectedPatient };
};

export { useSinglePatientAppointmentPage };
