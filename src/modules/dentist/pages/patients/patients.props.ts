import { useRouteMatch } from 'react-router';

/**
 * Patients Props
 */
const usePatientsProps = () => {
  const { path, url } = useRouteMatch();

  return { path, url };
};

export { usePatientsProps };
