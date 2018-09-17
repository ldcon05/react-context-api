import React, { Component } from 'react';
import axios from 'axios';

import { LoginContext } from '../App';
import { setLoggedUser } from '../../services/LocalStorageService';
import logo from '../../assets/img/logo.svg';
import './login.css'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { process: '' }
  }

  render() {

    const login = (e, loginContext) => {
      e.preventDefault();

      let email = document.querySelector('#login-form input[type=email]').value;
      let password = document.querySelector('#login-form input[type=password]').value;
      this.setState({ process: 'Loading...' });

      axios
        .post('http://localhost:9000/api/login', { email, password})
        .then(loggedUser => {
          loginContext();
          setLoggedUser(loggedUser.data);
          this.props.history.push('/todoist');
        })
        .catch(error => {
          this.setState({ process: 'Wrong Credentials!' });
        })
    };

    return (
      <section id="login" className="container">
        <div className="app-logo">
          <img src={logo} className="img-responsive" alt="logo" />
          <hr />
        </div>
        <LoginContext.Consumer>
          {clickEvent => {
            return (
              <form id="login-form" onSubmit={ e => login( e,  clickEvent.login ) }>
                <input type="email" placeholder="Enter your email"/>
                <input type="password" placeholder="Enter your password"/>
                <button>LOGIN</button>
                <br/>
              </form>
            )
          }}
        </LoginContext.Consumer>
        <small className="processAlert">{this.state.process}</small>
      </section>
    );
  }
}

export { Login }
