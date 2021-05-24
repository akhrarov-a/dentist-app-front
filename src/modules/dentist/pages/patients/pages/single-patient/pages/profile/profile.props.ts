import { AppState } from '@api';
import { getPatientById } from '@dentist/pages';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRouteMatch } from 'react-router';

/**
 * Single Patient Profile Page Props
 */
const useSinglePatientProfilePage = () => {
  const dispatch = useDispatch();
  const {
    params: { id }
  } = useRouteMatch<{ id: string }>();

  const { selectedPatient } = useSelector((state: AppState) => state.patients);

  useEffect(() => {
    dispatch(getPatientById(+id));
  }, [id]);

  return { selectedPatient };
};

export { useSinglePatientProfilePage };
