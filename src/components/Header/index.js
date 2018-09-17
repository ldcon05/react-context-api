import React from 'react';
import {Link} from 'react-router-dom';

import {LoginContext} from '../App'

export default (props) => (
  <header className="App-header">
    <ul>
      <li><Link to='/'>Home</Link></li>
      <LoginContext.Consumer>
        {value => {
          if(!value.isLogged)
            return <li><Link to='/login'>Login</Link></li>
          else
            return <li onClick={value.logout}><Link to='/login'>Logout</Link></li>

        }}
      </LoginContext.Consumer>
    </ul>
  </header>
);
