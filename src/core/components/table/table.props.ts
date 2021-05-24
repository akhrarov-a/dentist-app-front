import { ReactChild } from 'react';

/**
 * Table Props
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
