import { AppState } from '../../api/models/app-state';
import { PatientModalProps } from './type';
import {
  addPatient,
  updatePatientById
} from '../../redux/modules/patients/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

/**
 * Patient Props
 */
export const usePatientModal = ({ onClose }: PatientModalProps) => {
  const dispatch = useDispatch();

  const {
    selectedPatient,
    errors: { update, add }
  } = useSelector((state: AppState) => state.patients);

  const form = useFormik({
    initialValues: {
      name: selectedPatient?.name || '',
      email: selectedPatient?.email || '',
      description: selectedPatient?.description || '',
      userId: selectedPatient?.userId || undefined,
      phoneNumber: selectedPatient?.phoneNumber || '',
      id: selectedPatient?.id || undefined
    },
    onSubmit: (values, { setSubmitting }) => {
      if (selectedPatient) {
        dispatch(
          updatePatientById(values, () => {
            setSubmitting(true);
            onClose();
          })
        );

        return;
      }

      dispatch(
        addPatient(values, () => {
          setSubmitting(true);
          onClose();
        })
      );
    }
  });

  return { form, update, add, selectedPatient };
};
