import { InputProps } from './input.props';
import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './input.module.scss';

/**
 * Renders Pagination
 */
const Input: React.FC<InputProps> = ({
  className,
  error,
  label,
  value,
  ...props
}): JSX.Element => {
  const [focus, setFocus] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const onFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const onBlur = useCallback(() => {
    setFocus(false);
  }, []);

  useEffect(() => {
    if (!value) {
      setHasValue(false);

      return;
    }

    setHasValue(true);
  }, [value]);

  return (
    <div className={styles.container}>
      <label
        className={classNames(
          styles.label,
          focus || hasValue
            ? styles['label--on-focus']
            : styles['label--no-focus']
        )}
      >
        {label}
      </label>
      <input
        className={classNames(
          styles.input,
          className,
          error ? styles.error : ''
        )}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
      />
    </div>
  );
};
export { Input };
