import { CalendarEvent } from '../../../api/models/appointments/calendar-event';

/**
 * Custom Calendar Props
 */
type CustomCalendarProps = {
  localizer: any;
  events: CalendarEvent[];
  startAccessor?: any;
  endAccessor?: any;
};

export type { CustomCalendarProps };
