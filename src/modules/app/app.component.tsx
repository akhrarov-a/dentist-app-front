import { Auth } from '@auth';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { DashboardPage } from '@dentist/pages';
import { Dentist } from '@dentist';
import { Layout } from './components';
import { UserRole } from '@api';
import { hoc } from '@core';
import { useApp } from './app.props';
import React from 'react';
import styles from './app.module.scss';

/**
 * Renders App
 */
const App = hoc(useApp, ({ isAuthenticated, role }) => (
  <BrowserRouter>
    <div className={styles.app}>
      {isAuthenticated ? (
        <Layout>
          {role === UserRole.DENTIST && <Dentist />}
          {role === UserRole.ADMIN && (
            <Switch>
              <Route path={'/dashboard'} component={DashboardPage} />
              <Redirect to={'/dashboard'} />
            </Switch>
          )}
        </Layout>
      ) : (
        <Auth />
      )}
    </div>
  </BrowserRouter>
));

export { App };
