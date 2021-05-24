import { PatientsListPage, SinglePatientPage } from './pages';
import { Redirect, Route, Switch } from 'react-router-dom';
import { hoc } from '@core';
import { usePatientsProps } from './patients.props';
import React from 'react';

/**
 * Patients
 */
const Patients = hoc(
  usePatientsProps,
  ({ path, url }): JSX.Element => (
    <Switch>
      <Route path={`${path}/:id`} component={SinglePatientPage} />
      <Route path={`${path}`} component={PatientsListPage} />
      <Redirect to={path} />
    </Switch>
  )
);

export { Patients };
