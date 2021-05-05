import { hoc } from '../../../../utils/hoc';
import React from 'react';
import styles from './style.module.scss';
import useSinglePatientAppointmentPage from './props';

/**
 * Single Patient Appointments Page
 */
const SinglePatientAppointmentsPage = hoc(
  useSinglePatientAppointmentPage,
  ({ selectedPatient }) => <div className={styles.container}>Appointments</div>
);

export default SinglePatientAppointmentsPage;
