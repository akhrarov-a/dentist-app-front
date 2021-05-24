import { AddOrUpdatePatient, AppState } from '@api';
import { PatientModalProps } from './patients-modal.type';
import { addOrUpdatePatientSchema } from '../../validation';
import { addPatient, updatePatientById } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

/**
 * Patient Props
 */
const usePatientModal = ({ onClose }: PatientModalProps) => {
  const dispatch = useDispatch();

  const {
    selectedPatient,
    errors: { update, add }
  } = useSelector((state: AppState) => state.patients);

  const form = useFormik<AddOrUpdatePatient>({
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
    },
    validationSchema: addOrUpdatePatientSchema,
    validateOnChange: false
  });

  return { form, update, add, selectedPatient };
};

export { usePatientModal };
