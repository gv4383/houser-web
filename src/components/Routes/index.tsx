import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PATHS } from './constants';
import Dashboard from '../../views/Dashboard';
import NotFound from '../../views/404';
import Wizard from '../../views/Wizard';

const Routes = () => (
  <Switch>
    <Route exact path={PATHS.DASHBOARD} component={Dashboard} />
    <Route path={PATHS.WIZARD} component={Wizard} />
    <Route path={PATHS.NOT_FOUND} component={NotFound} />
  </Switch>
);

export default Routes;
