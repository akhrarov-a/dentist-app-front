import { AppState } from '../models/app-state';
import { useSelector } from 'react-redux';

/**
 * App Props
 */
const useApp = () => {
  const { isAuthenticated } = useSelector((state: AppState) => state.auth);

  return { isAuthenticated };
};

export default useApp;
