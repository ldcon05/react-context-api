import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Login } from './components/Login';
import Todoist from './components/Todo';
import { getLoggedUser } from './services/LocalStorageService';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    getLoggedUser() ? <Redirect to="/todoist" /> : <Component {...props}/>
  )} />
);

export default () => (
  <Switch>
    <Route exact path='/' />
    <ProtectedRoute path="/login" component={Login} />
    <Route path="/todoist" component={Todoist} />
  </Switch>
);
