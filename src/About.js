import React, { Component } from 'react';
import './App.css';
import {Alert} from 'react-bootstrap'
const title = "About us!";

class About extends Component {
  render() {
    return (
      <div className="Learnarea">
      <h1>{title}</h1>
      <Alert>Linda to do!</Alert>
      </div>
    )
  }
}

export default About;