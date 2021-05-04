import { IoArrowBack } from 'react-icons/all';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import PatientEditModal from '../../../components/PatientEditModal';
import React from 'react';
import SinglePatientAppointmentsPage from './Appointments';
import SinglePatientProfilePage from './Profile';
import styles from './style.module.scss';
import useSinglePatientPage from './props';

/**
 * Single Patient Page
 */
const SinglePatientPage: React.FC = (): JSX.Element => {
  const {
    selectedPatient,
    isEditing,
    path,
    url,
    xPosition,
    onLinkClick,
    toggleEditModal
  } = useSinglePatientPage();

  return (
    <div className={styles.container}>
      {isEditing && <PatientEditModal onClose={toggleEditModal} />}
      <div className={styles.navbar}>
        <NavLink className={styles.link} to={'/patients'}>
          <IoArrowBack className={styles.icon} />
          <p>Back</p>
        </NavLink>
        <div className={styles['edit-container']}>
          <p onClick={toggleEditModal}>Edit</p>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles['user-container']}>
          <div className={styles.links}>
            <NavLink
              className={styles['nav-link']}
              activeClassName={styles.active}
              to={`${url}/profile`}
              onClick={() => onLinkClick('profile')}
            >
              Profile
            </NavLink>
            <NavLink
              className={styles['nav-link']}
              activeClassName={styles.active}
              to={`${url}/appointments`}
              onClick={() => onLinkClick('appointments')}
            >
              Appointments
            </NavLink>
            <div
              className={styles['active-border']}
              style={{
                transform: `translateX(${xPosition}px)`,
                transition: 'ease-in-out 0.2s',
                width: xPosition > 0 ? '132px' : '60px'
              }}
            />
          </div>
          <div className={styles.user}>
            <h1 className={styles.title}>{selectedPatient?.name}</h1>
            <img
              className={styles.avatar}
              src={'/logo192.png'}
              alt={'User avatar'}
            />
          </div>
        </div>
        <Switch>
          <Route
            path={`${path}/profile`}
            component={SinglePatientProfilePage}
          />
          <Route
            path={`${path}/appointments`}
            component={SinglePatientAppointmentsPage}
          />
          <Redirect to={`${url}/profile`} />
        </Switch>
      </div>
    </div>
  );
};

export default SinglePatientPage;
