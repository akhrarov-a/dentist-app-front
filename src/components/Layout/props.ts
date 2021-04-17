import { useCallback, useState } from 'react';
import { useNavigationLinks } from '../../hooks/useNavigationLinks';

/**
 * Layout Props
 */
const useLayout = () => {
  const width = 280;

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
    xPosition
  };
};

export default useLayout;
