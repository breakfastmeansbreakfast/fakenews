import React, { Component } from 'react';
import logo from './images/trumpface.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>The Fake News Test</h1>          
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            See how succeptable you are to fake news. Take the 8 question test and find out! At least 4 will be legitimate.
          </p>
          <p>
          <a href="/questions" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Take the goddamn test</a>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
