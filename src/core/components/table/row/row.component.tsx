import { RowProps } from './row.props';
import React from 'react';
import classNames from 'classnames';
import styles from './row.module.scss';

/**
 * <Row />
 */
const Row: React.FC<RowProps> = ({
  children,
  className,
  elementRef,
  ...props
}) => (
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
