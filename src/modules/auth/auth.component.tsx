import { Redirect, Route, Switch } from 'react-router-dom';
import { SignInPage } from './pages';
import React from 'react';

/**
 * Auth
 */
const Auth = () => (
  <Switch>
    <Route path={`/sign-in`} component={SignInPage} />
    <Redirect to={`/sign-in`} />
  </Switch>
);

export { Auth };
