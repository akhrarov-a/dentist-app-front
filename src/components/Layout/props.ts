import { AppState } from '../../api/models/app-state';
import { useCallback, useState } from 'react';
import { useNavigationLinks } from '../../hooks/useNavigationLinks';
import { useSelector } from 'react-redux';

/**
 * Layout Props
 */
const useLayout = () => {
  const width = 280;

  const { user } = useSelector((state: AppState) => state.auth);

  const links = useNavigationLinks();
  const [isOpen, setIsOpen] = useState(false);
  const [xPosition, setX] = useState(-width);

  const toggleSidebar = useCallback(() => {
    if (xPosition < 0) {
      setX(0);
      setIsOpen(true);
    } else {
      setX(-width);
      setIsOpen(false);
    }
  }, [xPosition]);

  return {
    links,
    width,
    isOpen,
    toggleSidebar,
    xPosition,
    name: user?.name
  };
};

export default useLayout;
