import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { hoc } from '../utils/hoc';
import { useApp } from './props';
import DashboardPage from '../pages/Dashboard';
import Layout from '../components/Layout';
import Patients from '../pages/Patients';
import React from 'react';
import SignInPage from '../pages/SignIn';
import styles from './style.module.scss';

/**
 * Renders App
 */
const App = hoc(useApp, ({ isAuthenticated }) => (
  <BrowserRouter>
    <div className={styles.app}>
      {isAuthenticated ? (
        <Layout>
          <Switch>
            <Route path={'/dashboard'} component={DashboardPage} />
            <Route path={'/patients'} component={Patients} />
            <Redirect to={'/dashboard'} />
          </Switch>
        </Layout>
      ) : (
        <Switch>
          <Route path={'/sign-in'} component={SignInPage} />
          <Redirect to={'/sign-in'} />
        </Switch>
      )}
    </div>
  </BrowserRouter>
));

export default App;
