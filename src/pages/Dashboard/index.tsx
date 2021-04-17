import React from 'react';
import styles from './style.module.scss';
import useDashboardPage from './props';

/**
 * Dashboard Page
 */
const DashboardPage: React.FC = (): JSX.Element => {
  const {} = useDashboardPage();

  return (
    <div>
      <p>Dashboard Page</p>
    </div>
  );
};

export default DashboardPage;
