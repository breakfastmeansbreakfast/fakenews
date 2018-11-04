import React, { Component } from 'react';
import './App.css';

class Question extends Component {
  render() {
    return (
    <div className="Learnarea">
      <h1>Results</h1>
      <p>{this.props.location.state.message}</p>
      </div>
);
}}
//https://davidbuckingham.net/2017/01/12/fake-news-is-media-literacy-the-answer/ <add in
export default Question;