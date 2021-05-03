import { AppState } from '../../api/models/app-state';
import { Patient } from '../../api/models/patient/patient';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouteMatch } from 'react-router';

/**
 * Patient Edit Props
 */
const usePatientEditModal = () => {
  const dispatch = useDispatch();
  const {
    params: { id }
  } = useRouteMatch<{ id: string }>();

  const { selectedPatient } = useSelector((state: AppState) => state.patients);

  const form = useFormik<Patient>({
    initialValues: {
      name: selectedPatient?.name,
      email: selectedPatient?.email,
      description: selectedPatient?.description,
      userId: selectedPatient?.userId,
      phoneNumber: selectedPatient?.phoneNumber,
      id: selectedPatient?.id
    },
    onSubmit: () => {}
  });

  return { form };
};

export default usePatientEditModal;
