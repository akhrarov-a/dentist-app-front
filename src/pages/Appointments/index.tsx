import { Calendar } from 'react-big-calendar';
import { hoc } from '../../utils/hoc';
import { useAppointmentsPage } from './props';
import React from 'react';

/**
 * Appointments Page
 */
const AppointmentsPage = hoc(useAppointmentsPage, ({ localizer, events }) => (
  <div>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor={'start'}
      endAccessor={'end'}
    />
  </div>
));

export default AppointmentsPage;
