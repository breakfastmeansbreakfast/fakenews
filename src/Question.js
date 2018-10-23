import React, { Component } from 'react';
import './App.css';
import {Radio} from 'react-bootstrap'
const headline = "Test headline!";

class Question extends Component {
  render() {
    return (
      <div className="questionArea">
      <h1>{headline}</h1>
      <form>
      <Radio name="radioGroup" inline>
        Fake
      </Radio>{' '}
      <Radio name="radioGroup" inline>
        Legit
      </Radio>{' '}
      
      </form>      
      </div>
    )
  }
}

export default Question;
