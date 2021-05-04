import { AppState } from '../../../api/models/app-state';
import {
  deletePatientById,
  setErrors,
  singlePatientPageUnmount
} from '../../../redux/modules/patients/actions';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';

/**
 * Single Patient Page Props
 */
const useSinglePatientPage = () => {
  const dispatch = useDispatch();
  const { path, url } = useRouteMatch();
  const history = useHistory();

  const { selectedPatient } = useSelector((state: AppState) => state.patients);

  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [xPosition, setXPosition] = useState(0);

  const onLinkClick = useCallback((key: string) => {
    if (key === 'profile') {
      setXPosition(0);
    } else if (key === 'appointments') {
      setXPosition(118);
    }
  }, []);

  const toggleEditModal = useCallback(() => {
    setIsEditing(!isEditing);

    if (!isEditing) return;

    dispatch(setErrors.update());
  }, [isEditing]);

  const toggleDeleteModal = useCallback(() => {
    setIsDeleting(!isDeleting);
  }, [isDeleting]);

  const onSubmitDeleteClick = useCallback(() => {
    toggleDeleteModal();

    if (!selectedPatient?.id) return;

    dispatch(
      deletePatientById(selectedPatient.id, () => history.push('/patients'))
    );
  }, [selectedPatient, history]);

  useEffect(
    () => () => {
      dispatch(singlePatientPageUnmount());
    },
    []
  );

  return {
    selectedPatient,
    isEditing,
    isDeleting,
    path,
    url,
    xPosition,
    onLinkClick,
    toggleEditModal,
    toggleDeleteModal,
    onSubmitDeleteClick
  };
};

export default useSinglePatientPage;
