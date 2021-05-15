import { Calendar } from 'react-big-calendar';
import { CustomCalendarProps } from './custom-calendar.props';
import { customFormat, formatTime } from './format';
import React from 'react';
import moment from 'moment';

/**
 * Renders Custom Calendar
 */
const CustomCalendar: React.FC<CustomCalendarProps> = ({
  localizer,
  events,
  startAccessor,
  endAccessor
}): JSX.Element => (
  <Calendar
    localizer={localizer}
    events={events}
    startAccessor={startAccessor || 'start'}
    endAccessor={endAccessor || 'end'}
    defaultDate={moment().toDate()}
    formats={{
      eventTimeRangeFormat: (date) =>
        `${formatTime(date.start)} – ${formatTime(date.end)}`,
      timeGutterFormat: (date) => formatTime(date),
      agendaDateFormat: (date) => customFormat(date, 'Do dddd'),
      agendaTimeRangeFormat: (date) =>
        `${formatTime(date.start)} – ${formatTime(date.end)}`
    }}
  />
);

export { CustomCalendar };
