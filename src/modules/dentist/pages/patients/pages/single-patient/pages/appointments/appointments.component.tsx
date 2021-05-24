import { hoc } from '@core';
import { useSinglePatientAppointmentPage } from './appointments.props';
import React from 'react';
import styles from './appointments.module.scss';

/**
 * Single Patient Appointments Page
 */
const SinglePatientAppointmentsPage = hoc(
  useSinglePatientAppointmentPage,
  ({ selectedPatient }) => <div className={styles.container}>Appointments</div>
);

export { SinglePatientAppointmentsPage };
