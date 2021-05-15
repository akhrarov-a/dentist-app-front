import { CustomCalendar } from '../../components/common';
import { hoc } from '../../utils/hoc';
import { useAppointmentsPage } from './props';
import React from 'react';
import styles from './style.module.scss';

/**
 * Appointments Page
 */
const AppointmentsPage = hoc(useAppointmentsPage, ({ localizer, events }) => (
  <div className={styles.appointments}>
    <CustomCalendar localizer={localizer} events={events} />
  </div>
));

export default AppointmentsPage;
