import { AppState } from '../../../api/models/app-state';
import { deletePatientById } from '../../../redux/modules/patients/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';
import { useState } from 'react';

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

  const onLinkClick = (key: string) => {
    if (key === 'profile') {
      setXPosition(0);
    } else if (key === 'appointments') {
      setXPosition(118);
    }
  };

  const toggleEditModal = () => {
    setIsEditing(!isEditing);
  };

  const toggleDeleteModal = () => {
    setIsDeleting(!isDeleting);
  };

  const onSubmitDeleteClick = () => {
    toggleDeleteModal();

    if (!selectedPatient?.id) return;

    dispatch(
      deletePatientById(selectedPatient.id, () => history.push('/patients'))
    );
  };

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
