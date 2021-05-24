import { AiOutlineDelete, IoArrowBack, RiEditBoxLine } from 'react-icons/all';
import { Button, Modal, hoc } from '@core';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { PatientModal } from '@dentist/pages/patients/components';
import {
  SinglePatientAppointmentsPage,
  SinglePatientProfilePage
} from './pages';
import { useSinglePatientPage } from './single-patient.props';
import React from 'react';
import classNames from 'classnames';
import styles from './single-patient.module.scss';

/**
 * Single Patient Page
 */
const SinglePatientPage = hoc(
  useSinglePatientPage,
  ({
    selectedPatient,
    isEditing,
    isDeleting,
    path,
    url,
    xPosition,
    onLinkClick,
    toggleEditModal,
    toggleDeleteModal,
    onSubmitDeleteClick
  }) => (
    <div className={styles.container}>
      {isEditing && <PatientModal onClose={toggleEditModal} />}
      {isDeleting && (
        <Modal className={styles['delete-modal']}>
          <h1>
            Are you sure <br />
            to delete this patient ?
          </h1>
          <h3>You won't able to recover</h3>
          <div className={styles.buttons}>
            <Button theme={'teritary'} size={'md'} onClick={toggleDeleteModal}>
              Cancel
            </Button>
            <Button theme={'primary'} size={'md'} onClick={onSubmitDeleteClick}>
              Delete
            </Button>
          </div>
        </Modal>
      )}
      <div className={styles.navbar}>
        <NavLink className={styles.link} to={'/patients'}>
          <IoArrowBack className={styles.icon} />
          <p>Back</p>
        </NavLink>
        <div className={styles['action-container']}>
          <p onClick={toggleEditModal}>
            <RiEditBoxLine />
            <span
              className={classNames(styles.tooltip, styles['tooltip--edit'])}
            >
              Edit
            </span>
          </p>
          <p onClick={toggleDeleteModal}>
            <AiOutlineDelete />
            <span
              className={classNames(styles.tooltip, styles['tooltip--delete'])}
            >
              Delete
            </span>
          </p>
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
              src={'/logo.png'}
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
  )
);

export { SinglePatientPage };
