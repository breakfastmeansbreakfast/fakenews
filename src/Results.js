import React, { Component } from 'react';
import './App.css';

class Results extends Component {
  render() {
    return (
    <div className="Learnarea">
      <h1>Results</h1>
      <h2>{this.props.location.state.message}</h2>
      <p>Nice work completing the test. Please learn more about Fake News and how to spot it by clicking the Learn tab above.</p>
      </div>
);
}}

export default Results;