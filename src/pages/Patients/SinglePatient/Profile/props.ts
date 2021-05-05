import { AppState } from '../../../../api/models/app-state';
import { getPatientById } from '../../../../redux/modules/patients/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRouteMatch } from 'react-router';

/**
 * Single Patient Profile Page Props
 */
export const useSinglePatientProfilePage = () => {
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
