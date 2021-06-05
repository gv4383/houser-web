import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PATHS } from './constants';
import Dashboard from '../../views/Dashboard';
import Wizard from '../../views/Wizard';

const Routes = () => (
  <Switch>
    <Route exact path={PATHS.DASHBOARD} component={Dashboard} />
    <Route path={PATHS.WIZARD} component={Wizard} />
  </Switch>
);

export default Routes;
