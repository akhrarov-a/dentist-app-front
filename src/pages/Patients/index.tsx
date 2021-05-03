import { Redirect, Route, RouteChildrenProps, Switch } from 'react-router-dom';
import PatientsPage from './Patients';
import React, { Fragment } from 'react';
import SinglePatientPage from './SinglePatient';

/**
 * Patients Page
 */
const Patients: React.FC<RouteChildrenProps> = ({ match }): JSX.Element => (
  <Fragment>
    <Switch>
      <Route path={`${match?.path}/:id`} component={SinglePatientPage} />
      <Route exact path={`${match?.path}`} component={PatientsPage} />
      <Redirect to={match?.path} />
    </Switch>
  </Fragment>
);

export default Patients;
