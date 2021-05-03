import { HeadContext } from './head.context';
import { HeadProps } from './head.props';
import React from 'react';
import styles from './head.module.scss';

/**
 * Renders Head
 */
const Head: React.FC<HeadProps> = ({ children }) => (
  <thead className={styles.head}>
    <HeadContext.Provider value>{children}</HeadContext.Provider>
  </thead>
);

export { Head };
