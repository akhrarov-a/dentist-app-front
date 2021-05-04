import { ModalProps } from './modal.props';
import React from 'react';
import classNames from 'classnames';
import styles from './modal.module.scss';

/**
 * Renders Modal
 */
const Modal: React.FC<ModalProps> = ({
  children,
  className,
  ...props
}): JSX.Element => (
  <div className={styles['modal-container']}>
    <div className={classNames(styles.modal, className)} {...(props as any)}>
      {children}
    </div>
  </div>
);

export { Modal };
