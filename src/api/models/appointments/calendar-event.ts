/**
 * Calendar Event Type
 */
export type CalendarEvent = {
  title: string;
  start: Date;
  end: Date;
  resource?: string;
  allDay?: boolean;
};
