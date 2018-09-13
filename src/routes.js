import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Login } from './login';
import { getLoggedUser } from './services/LocalStorageService';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    getLoggedUser() ? <Redirect to="/" /> : <Component {...props}/>
  )} />
);

export default () => (
  <Switch>
    <Route exact path='/' />
    <ProtectedRoute path="/login" component={Login} />
  </Switch>
);