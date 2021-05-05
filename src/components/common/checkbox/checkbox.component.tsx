import { CheckboxProps } from './checkbox.props';
import React from 'react';
import classNames from 'classnames';
import styles from './checkbox.module.scss';

/**
 * Renders Checkbox
 */
const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange
}): JSX.Element => (
  <div
    className={classNames(
      styles.checkbox,
      checked ? styles['checkbox--active'] : ''
    )}
  >
    <div className={styles.box} onClick={onChange}>
      {checked && <div className={styles.checkmark} />}
    </div>
  </div>
);

export { Checkbox };
