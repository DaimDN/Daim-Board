import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';
import Sling from '../dashboard/Sling';
import Settings from '../dashboard/settings';
import Graphs from '../dashboard/Graphs';

const Routes = props => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/sling" component={Sling} />
        <PrivateRoute exact path="/settings" component={Settings} />
        <PrivateRoute exact path="/graphs" component={Graphs} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
