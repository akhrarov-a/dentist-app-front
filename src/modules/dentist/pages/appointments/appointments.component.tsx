import { CustomCalendar, hoc } from '@core';
import { useAppointmentsPage } from './appointments.props';
import React from 'react';
import styles from './appoitnments.module.scss';

/**
 * Appointments Page
 */
const AppointmentsPage = hoc(useAppointmentsPage, ({ localizer, events }) => (
  <div className={styles.appointments}>
    <CustomCalendar localizer={localizer} events={events} />
  </div>
));

export { AppointmentsPage };
