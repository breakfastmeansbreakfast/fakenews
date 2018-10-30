import React, { Component } from 'react';
import './App.css';
import {Radio} from 'react-bootstrap'
const headline = "Is it Fake or Is it Real!";
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
      <img src={require("./images/trump1.jpg")} alt="article" />
      <Radio name="radioGroup" inline>
        Fake
      </Radio>{''}
      <Radio name="radioGroup" inline>
        Legit
      </Radio>{' '}
      </form>
      <form>
      <img src={require("./images/McDonalds.jpg")} alt="article" />
      <Radio name="radioGroup" inline>
        Fake
      </Radio>{''}
      <Radio name="radioGroup" inline>
        Legit
      </Radio>{' '} 
      </form>      
      <form>
      <img src={require("./images/fakenews2.jpg")} alt="article" />
      <Radio name="radioGroup" inline>
        Fake
      </Radio>{''}
      <Radio name="radioGroup" inline>
        Legit
      </Radio>{' '} 
      </form>   
      <form>
      <img src={require("./images/fakenews3.jpg")} alt="article" />
      <Radio name="radioGroup" inline>
        Fake
      </Radio>{''}
      <Radio name="radioGroup" inline>
        Legit
      </Radio>{' '} 
      </form>   
      <form>
      <img src={require("./images/fakenews4.jpg")} alt="article" />
      <Radio name="radioGroup" inline>
        Fake
      </Radio>{''}
      <Radio name="radioGroup" inline>
        Legit
      </Radio>{' '} 
      </form>   
      <form>
      <img src={require("./images/trump1.jpg")} alt="article" />
      <Radio name="radioGroup" inline>
        Fake
      </Radio>{''}
      <Radio name="radioGroup" inline>
        Legit
      </Radio>{' '} 
      </form>   
      </div>
    )
  }
}

export default Question;
