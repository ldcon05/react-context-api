import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';
import RouterOutlet from './routes';
import { logout, getLoggedUser } from './services/LocalStorageService';
import './App.css';

const LoginContext = new React.createContext({
  isLogged: '',
  login: () => {},
  logout: () => {}
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged : getLoggedUser(),
      login: this.login,
      logout: this.logout
    }
  }

  login = () => {
    this.setState({ isLogged: 'logged'})
  };

  logout = () => {
    this.setState({ isLogged: ''});
    logout();
  };

  render() {
    return (
      <Router>
        <div>
          <LoginContext.Provider value={ this.state }>
            <div className="App">
              {<Header login={this.login} logout={this.logout}/>}
            </div>
            <RouterOutlet/>
          </LoginContext.Provider>
        </div>
      </Router>
    );
  }
}

export  {App,  LoginContext};
