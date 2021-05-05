import { hoc } from '../../utils/hoc';
import React from 'react';
import useDashboardPage from './props';

/**
 * Dashboard Page
 */
const DashboardPage = hoc(useDashboardPage, ({ message }) => (
  <div>
    <p>Dashboard Page</p>
  </div>
));

export default DashboardPage;
