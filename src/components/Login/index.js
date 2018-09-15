import React, { Component } from 'react';
import axios from 'axios';

import { LoginContext } from '../App';
import { setLoggedUser } from '../../services/LocalStorageService';

class Login extends Component {
  render() {

    const login = (e, loginContext) => {
      e.preventDefault();

      let email = document.querySelector('#login-form input[type=email]').value;
      let password = document.querySelector('#login-form input[type=password]').value;

      axios
        .post('http://localhost:9000/api/login', { email, password})
        .then(loggedUser => {
          loginContext();
          setLoggedUser(loggedUser.data);
          this.props.history.push('/');
        })
        .catch(error => {})
    };

    return (
      <div>
        <LoginContext.Consumer>
          {clickEvent => {
            return (
              <form id="login-form" onSubmit={ e => login( e,  clickEvent.login ) }>
                <input type="email" placeholder="Enter your email"/>
                <input type="password" placeholder="Enter your password"/>
                <button>Login</button>
                <br/>
              </form>
            )
          }}
        </LoginContext.Consumer>
      </div>
    );
  }
}

export { Login }