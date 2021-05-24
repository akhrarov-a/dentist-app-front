import { useRouteMatch } from 'react-router';

/**
 * Dentist Props
 */
const useDentistProps = () => {
  const { path, url } = useRouteMatch();

  return { path, url };
};

export { useDentistProps };
