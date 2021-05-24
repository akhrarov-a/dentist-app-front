import { hoc } from '@core';
import { useDashboardPage } from './dashboard.props';
import React from 'react';

/**
 * Dashboard Page
 */
const DashboardPage = hoc(useDashboardPage, ({ message }) => (
  <div>
    <p>Dashboard Page</p>
  </div>
));

export { DashboardPage };
