import React, { Component } from 'react';
import './App.css';
import {Radio} from 'react-bootstrap'
import axios from 'axios';

//let headline = "Test headline!";

/*axios.get(`http://localhost:9999/question`)
  .then(res => {
    const question = res.data;
    this.setState({ question });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

console.log(this.state.question);
*/

class Question extends Component {
  state = {
    question: [1]
  }

  componentDidMount() {
    axios.get(`http://localhost:9999/question`)
      .then(res => {
        const question = res.data;
        this.setState({ question });        
        //headline = this.state.question.map(question => question.headline)
        //console.log(headline)
      })
  }

  render() {
    return (
      <div className="questionArea">
      <h1>{this.state.question.map(question => question.headline)}</h1>
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
