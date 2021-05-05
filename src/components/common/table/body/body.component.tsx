import React, { FC } from 'react';
import styles from './body.module.scss';

/**
 * Renders Body
 */
const Body: FC = ({ children }): JSX.Element => (
  <tbody className={styles.body}>{children}</tbody>
);

export { Body };
