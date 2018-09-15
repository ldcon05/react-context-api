import React from 'react';
import {Link} from 'react-router-dom';

import {LoginContext} from '../App'
import logo from '../../assets/img/logo.svg';

export default (props) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to React</h1>
    <LoginContext.Consumer>
      {value => {
        if(!value.isLogged){
          return <button onClick={value.login}>Login</button>
        }else {
          return <button onClick={value.logout}>Logout</button>
        }
      }}
    </LoginContext.Consumer>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/login'>Login</Link></li>
    </ul>
  </header>
);