import { hoc } from '@core';
import { useSinglePatientProfilePage } from './profile.props';
import React from 'react';
import styles from './profile.module.scss';

/**
 * Single Patient Profile Page
 */
const SinglePatientProfilePage = hoc(
  useSinglePatientProfilePage,
  ({ selectedPatient }) => (
    <div className={styles.container}>
      <div className={styles.controls}>
        <div>
          <h4>Name</h4>
          <h6>{selectedPatient?.name}</h6>
        </div>
        <div>
          <h4>Phone</h4>
          <h6>{selectedPatient?.phoneNumber}</h6>
        </div>
      </div>
      <div className={styles.controls}>
        <div>
          <h4>Email</h4>
          <h6>{selectedPatient?.email}</h6>
        </div>
        <div>
          <h4>Description</h4>
          <h6>{selectedPatient?.description}</h6>
        </div>
      </div>
    </div>
  )
);

export { SinglePatientProfilePage };
