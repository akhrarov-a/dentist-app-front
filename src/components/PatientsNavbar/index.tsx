import { AiOutlineDelete, IoIosAdd } from 'react-icons/all';
import { PatientsNavbarProps } from './props';
import { Search } from '../common';
import React from 'react';
import classNames from 'classnames';
import styles from './style.module.scss';

/**
 * Patients Navbar
 */
const PatientsNavbar: React.FC<PatientsNavbarProps> = ({
  query,
  onQueryChange,
  onAddClick,
  onDeleteClick,
  deleteVisible
}): JSX.Element => (
  <div className={styles.container}>
    <h1 className={styles.title}>Patients</h1>
    <div className={styles.right}>
      <Search
        className={styles.search}
        onChange={onQueryChange}
        value={query}
        placeholder={'Search'}
      />
      <div className={styles.add}>
        <IoIosAdd onClick={onAddClick} className={styles.icon} />
        <span className={classNames(styles.tooltip, styles['tooltip--add'])}>
          Add patient
        </span>
      </div>
      {deleteVisible && (
        <div className={styles.delete}>
          <AiOutlineDelete onClick={onDeleteClick} className={styles.icon} />
          <span
            className={classNames(styles.tooltip, styles['tooltip--delete'])}
          >
            Delete patients
          </span>
        </div>
      )}
    </div>
  </div>
);

export default PatientsNavbar;
