import { CalendarEvent } from '@api';

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
