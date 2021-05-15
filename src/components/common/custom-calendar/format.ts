import moment from 'moment';

/**
 * Format time
 */
const formatTime = (date: Date) => `${moment(date, 'hh:mm').format('HH:mm')}`;

/**
 * Custom format
 */
const customFormat = (date: Date, format: string) =>
  `${moment(date).format(format)}`;

export { formatTime, customFormat };
