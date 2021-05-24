import { BiErrorCircle } from 'react-icons/all';
import { FormErrorProps } from './form-error.props';
import React from 'react';
import classNames from 'classnames';
import styles from './form-error.module.scss';

/**
 * Renders Form Error
 */
const FormError: React.FC<FormErrorProps> = ({
  text,
  className
}): JSX.Element => (
  <div
    className={classNames(styles.container, className)}
    style={{ display: text ? 'flex' : 'none' }}
  >
    <BiErrorCircle className={styles.icon} />
    <p className={styles.error}>{text}</p>
  </div>
);
export { FormError };
