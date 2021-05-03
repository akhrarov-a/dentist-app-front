import { PatientsNavbarProps } from './props';
import { Search } from '../../core';
import React from 'react';
import styles from './style.module.scss';

/**
 * Patients Navbar
 */
const PatientsNavbar: React.FC<PatientsNavbarProps> = ({
  query,
  onQueryChange
}): JSX.Element => (
  <div className={styles.container}>
    <h1 className={styles.title}>Patients</h1>
    <Search
      className={styles.search}
      onChange={onQueryChange}
      value={query}
      placeholder={'Search'}
    />
  </div>
);

export default PatientsNavbar;
