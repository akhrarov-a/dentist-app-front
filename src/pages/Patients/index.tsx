import React from 'react';
import styles from './style.module.scss';
import usePatientsPage from './props';

/**
 * Patients Page
 */
const PatientsPage: React.FC = (): JSX.Element => {
  const {} = usePatientsPage();

  return (
    <div>
      <p>Patients Page</p>
    </div>
  );
};

export default PatientsPage;
