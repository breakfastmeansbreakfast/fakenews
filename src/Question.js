import React, { Component } from 'react';
import './App.css';
import {Radio} from 'react-bootstrap'
const headline = "Is it Fake or Is it Real!";

class Question extends Component {
  render() {
    return (
      <div className="questionArea">
      <h1>{headline}</h1>
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
