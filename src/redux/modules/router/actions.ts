import { make } from 'redux-chill';

/**
 * Navigate
 */
export const navigate = make('[router] navigate').stage(
  (route: string) => route
);
