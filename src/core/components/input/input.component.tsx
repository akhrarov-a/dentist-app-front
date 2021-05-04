import { InputProps } from './input.props';
import React from 'react';
import classNames from 'classnames';
import styles from './input.module.scss';

/**
 * Renders Pagination
 */
const Input: React.FC<InputProps> = ({ className, ...props }): JSX.Element => (
  <input className={classNames(styles.input, className)} {...props} />
);
export { Input };
