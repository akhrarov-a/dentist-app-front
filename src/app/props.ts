import { AppState } from '../api/models/app-state';
import { startUp } from '../redux/modules/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

/**
 * App Props
 */
const useApp = () => {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state: AppState) => state.auth);

  useEffect(() => {
    dispatch(startUp());
  }, []);

  return { isAuthenticated };
};

export default useApp;
