import { RowProps } from './row.props';
import React from 'react';
import classNames from 'classnames';
import styles from './row.module.scss';

/**
 * Renders Row
 */
const Row: React.FC<RowProps> = ({
  children,
  className,
  elementRef,
  ...props
}): JSX.Element => (
  <tr
    className={classNames(className, styles.row, {
      [styles.clickable]: props.onClick
    })}
    ref={elementRef}
    {...props}
  >
    {children}
  </tr>
);

export { Row };
