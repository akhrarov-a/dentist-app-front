import { hoc } from '../../../../utils/hoc';
import { useSinglePatientAppointmentPage } from './props';
import React from 'react';
import styles from './style.module.scss';

/**
 * Single Patient Appointments Page
 */
const SinglePatientAppointmentsPage = hoc(
  useSinglePatientAppointmentPage,
  ({ selectedPatient }) => <div className={styles.container}>Appointments</div>
);

export default SinglePatientAppointmentsPage;
