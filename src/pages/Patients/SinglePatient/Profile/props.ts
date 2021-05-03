import { AppState } from '../../../../api/models/app-state';
import { useSelector } from 'react-redux';

/**
 * Single Patient Profile Page Props
 */
const useSinglePatientProfilePage = () => {
  const { selectedPatient } = useSelector((state: AppState) => state.patients);

  return { selectedPatient };
};

export default useSinglePatientProfilePage;
