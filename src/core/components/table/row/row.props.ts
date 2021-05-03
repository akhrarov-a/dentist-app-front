import { HTMLAttributes, Ref } from 'react';

/**
 * Props
 */
export type RowProps = HTMLAttributes<HTMLTableRowElement> & {
  /**
   * Class name
   */
  className?: string;

  /**
   * Element ref
   */
  elementRef?: Ref<any>;
};
