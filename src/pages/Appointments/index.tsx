import { hoc } from '../../utils/hoc';
import { useAppointmentsPage } from './props';
import React from 'react';

/**
 * Appointments Page
 */
const AppointmentsPage = hoc(useAppointmentsPage, ({ message }) => (
  <div>
    <p>Appointments Page</p>
  </div>
));

export default AppointmentsPage;
