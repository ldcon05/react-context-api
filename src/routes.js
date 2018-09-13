import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Login } from './login';

export default () => (
  <Switch>
    <Route exact path='/' />
    <Route path="/login" component={Login} />
  </Switch>
);