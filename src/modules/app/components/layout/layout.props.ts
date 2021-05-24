import { AppState } from '@api';
import { logOut } from '@auth';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSidebarLinks } from '@app/hooks';

/**
 * Layout Props
 */
export const useLayout = () => {
  const width = 280;

  const dispatch = useDispatch();

  const { user } = useSelector((state: AppState) => state.auth);

  const links = useSidebarLinks();

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

  const onLogoutClick = useCallback(() => {
    dispatch(logOut());
  }, []);

  return {
    links,
    width,
    isOpen,
    toggleSidebar,
    xPosition,
    name: user?.name,
    role: user?.role,
    onLogoutClick
  };
};
