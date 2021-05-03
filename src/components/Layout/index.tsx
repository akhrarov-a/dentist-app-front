import {
  AiOutlineClose,
  AiOutlineLogout,
  GiHamburgerMenu,
  IoPersonOutline,
  MdDashboard,
  MdEvent
} from 'react-icons/all';
import { NavLink } from 'react-router-dom';
import React from 'react';
import classNames from 'classnames';
import styles from './style.module.scss';
import useLayout from './props';

/**
 * Layout
 */
const Layout: React.FC = ({ children }): JSX.Element => {
  const {
    links,
    toggleSidebar,
    width,
    xPosition,
    isOpen,
    name,
    onLogoutClick
  } = useLayout();

  return (
    <div className={styles.layout}>
      <div
        className={styles.navigation}
        style={{
          width: `${width - 1}px`,
          transform: `translatex(${xPosition}px)`,
          transition: '0.5s ease'
        }}
      >
        <div className={styles.logo}>Logo</div>
        <div className={styles.links}>
          {links?.map(({ name, to, iconKey }, index) => (
            <NavLink key={index} className={styles.link} to={to}>
              {iconKey === 'MdDashboard' && (
                <MdDashboard className={styles.icon} />
              )}
              {iconKey === 'MdEvent' && <MdEvent className={styles.icon} />}
              {iconKey === 'IoPersonOutline' && (
                <IoPersonOutline className={styles.icon} />
              )}
              <p>{name}</p>
            </NavLink>
          ))}
        </div>
        <div
          className={classNames(styles.link, styles.logOut)}
          onClick={onLogoutClick}
        >
          <AiOutlineLogout className={styles.icon} />
          <p>Log out</p>
        </div>
        {!isOpen ? (
          <GiHamburgerMenu onClick={toggleSidebar} className={styles.toggle} />
        ) : (
          <AiOutlineClose onClick={toggleSidebar} className={styles.toggle} />
        )}
      </div>
      <div className={styles['children-container']}>
        <div className={styles['header-container']}>
          <div className={styles.header}>
            <p className={styles['header-title']}>{name}</p>
            <img
              className={styles['header-avatar']}
              src={'/logo192.png'}
              alt={'User Avatar'}
            />
          </div>
        </div>
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
