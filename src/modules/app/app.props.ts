import { AppState } from '@api';
import { startUp } from '@auth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

/**
 * App Props
 */
const useApp = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector(
    (state: AppState) => state.auth
  );

  useEffect(() => {
    dispatch(startUp());
  }, []);

  return { isAuthenticated, role: user?.role };
};

export { useApp };
