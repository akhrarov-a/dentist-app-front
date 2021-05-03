import { AppState } from '../../../api/models/app-state';
import { getPatientById } from '../../../redux/modules/patients/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';

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

  const { selectedPatient } = useSelector((state: AppState) => state.patients);

  const [isEditing, setIsEditing] = useState(false);
  const [xPosition, setXPosition] = useState(0);

  const onLinkClick = (key: string) => {
    if (key === 'profile') {
      setXPosition(0);
    } else if (key === 'appointments') {
      setXPosition(118);
    }
  };

  useEffect(() => {
    dispatch(getPatientById(+id));
  }, [id]);

  return { selectedPatient, isEditing, path, url, xPosition, onLinkClick };
};

export default useSinglePatientPage;
