import React from 'react';
import usePatientsPage from './props';

/**
 * Patients Page
 */
const PatientsPage = () => {
  const { message } = usePatientsPage();

  return (
    <div>
      <p>Patients Page</p>
    </div>
  );
};

export default PatientsPage;
