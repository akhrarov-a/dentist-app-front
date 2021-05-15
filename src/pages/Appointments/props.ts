import { CalendarEvent } from '../../api/models/appointments/calendar-event';
import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

/**
 * Appointments Page Props
 */
export const useAppointmentsPage = () => {
  const localizer = momentLocalizer(moment);

  const events: CalendarEvent[] = [
    {
      title: 'Asadbek',
      start: moment().toDate(),
      end: moment().add('2', 'hours').toDate()
    },
    {
      title: 'Jafarbek',
      start: moment().add('2', 'hours').toDate(),
      end: moment().add('4', 'hours').toDate()
    },
    {
      title: 'Axadabek',
      start: moment().add('4', 'hours').toDate(),
      end: moment().add('6', 'hours').toDate()
    }
  ];

  return { localizer, events };
};
