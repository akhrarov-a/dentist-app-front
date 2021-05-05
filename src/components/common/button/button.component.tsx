import { ButtonProps } from './button.props';
import React from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

/**
 * Renders Button
 */
const Button: React.FC<ButtonProps> = ({
  size,
  theme,
  children,
  className,
  ...props
}) => (
  <button
    className={classNames(
      styles.button,
      className,
      styles['button-theme' + `--${theme}`],
      styles['button-size' + `--${size}`]
    )}
    {...(props as any)}
  >
    {children}
  </button>
);

Button.defaultProps = {
  size: 'sm',
  theme: 'primary'
};

export { Button };
