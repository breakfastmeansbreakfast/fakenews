import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login-page';
import Signup from './signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            HOME
          </p>
        </header>
        < Login/>
        < Signup/>
      </div>
    );
  }
}

export default App;
