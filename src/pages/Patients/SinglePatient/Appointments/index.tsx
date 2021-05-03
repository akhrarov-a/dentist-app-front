import React from 'react';
import styles from './style.module.scss';
import useSinglePatientAppointmentPage from './props';

/**
 * Single Patient Appointments Page
 */
const SinglePatientAppointmentsPage: React.FC = (): JSX.Element => {
  const { selectedPatient } = useSinglePatientAppointmentPage();

  return <div className={styles.container}>Appointments</div>;
};

export default SinglePatientAppointmentsPage;
