import { BiErrorCircle } from 'react-icons/all';
import { FormErrorProps } from './form-error.props';
import React from 'react';
import styles from './form-error.module.scss';

/**
 * Renders Pagination
 */
const FormError: React.FC<FormErrorProps> = ({ text }): JSX.Element => (
  <div className={styles.container} style={{ display: text ? 'flex' : 'none' }}>
    <BiErrorCircle className={styles.icon} />
    <p className={styles.error}>{text}</p>
  </div>
);
export { FormError };
