import { TdHTMLAttributes } from 'react';

/**
 * Cell Props
 */
export type CellProps = TdHTMLAttributes<any> & {
  /**
   * Class name
   */
  className?: string;

  /**
   * Bold font & block color
   */
  bold?: boolean;

  /**
   * Is at end
   */
  atEnd?: boolean;

  /**
   * Is at center
   */
  atCenter?: boolean;
};
