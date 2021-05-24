/**
 * Calendar Event Type
 */
type CalendarEvent = {
  title: string;
  start: Date;
  end: Date;
  resource?: string;
  allDay?: boolean;
};

export type { CalendarEvent };
