import { AppState } from '../../../api/models/app-state';
import {
  deletePatientById,
  getPatientById
} from '../../../redux/modules/patients/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router';

/**
 * Single Patient Page Props
 */
const useSinglePatientPage = () => {
  const dispatch = useDispatch();
  const {
    params: { id },
    path,
    url
  } = useRouteMatch<{ id: string }>();
  const history = useHistory();

  const { selectedPatient } = useSelector((state: AppState) => state.patients);

  const [isEditing, setIsEditing] = useState(false);
  const [xPosition, setXPosition] = useState(0);
  const [submitDelete, setSubmitDelete] = useState(false);

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

  const onDeleteClick = () => {};

  const onSubmitDeleteClick = () => {
    if (!selectedPatient?.id) return;

    dispatch(
      deletePatientById(selectedPatient.id, () => history.push('/patients'))
    );
  };

  useEffect(() => {
    dispatch(getPatientById(+id));
  }, [id]);

  return {
    selectedPatient,
    isEditing,
    path,
    url,
    xPosition,
    onLinkClick,
    toggleEditModal,
    onDeleteClick
  };
};

export default useSinglePatientPage;
