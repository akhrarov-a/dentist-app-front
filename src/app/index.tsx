import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import DashboardPage from '../pages/Dashboard';
import Layout from '../components/Layout';
import Patients from '../pages/Patients';
import React from 'react';
import SignInPage from '../pages/SignIn';
import styles from './style.module.scss';
import useApp from './props';

/**
 * Renders App
 */
const App: React.FC = (): JSX.Element => {
  const { isAuthenticated } = useApp();

  return (
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
  );
};

export default App;
