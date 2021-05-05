import { hoc } from '../../utils/hoc';
import { useDashboardPage } from './props';
import React from 'react';

/**
 * Dashboard Page
 */
const DashboardPage = hoc(useDashboardPage, ({ message }) => (
  <div>
    <p>Dashboard Page</p>
  </div>
));

export default DashboardPage;
