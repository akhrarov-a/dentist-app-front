import { AppointmentsPage, DashboardPage, Patients } from '@dentist/pages';
import { Redirect, Route, Switch } from 'react-router-dom';
import { hoc } from '@core';
import { useDentistProps } from './dentist.props';
import React from 'react';

/**
 * Dentist
 */
const Dentist = hoc(useDentistProps, ({ path, url }) => (
  <Switch>
    <Route path={'/dashboard'} component={DashboardPage} />
    <Route path={'/appointments'} component={AppointmentsPage} />
    <Route path={'/patients'} component={Patients} />
    <Redirect to={'/dashboard'} />
  </Switch>
));

export { Dentist };
