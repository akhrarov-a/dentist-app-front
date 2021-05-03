import { ReactChild } from 'react';

/**
 * Props
 */
type TableProps = {
  /**
   * Children components
   */
  children: ReactChild[];

  /**
   * On sort callback
   */
  onSort?: () => any;
};

export type { TableProps };
