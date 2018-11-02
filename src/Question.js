import React, { Component } from 'react';
import './App.css';
import {Radio} from 'react-bootstrap'
import axios from 'axios';
const headline = "Is it Fake or Is it Real!";

/*let headlines = {
  headline1: {
    headlineID: 1,
    headline: "The first headline",
    leftOrRight: "L",
    source: "www.bbc.co.uk",
    descripion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis finibus justo. Sed tincidunt arcu nunc, ac egestas nulla pellentesque pretium. Donec id pretium justo. Ut vitae felis eget mi blandit pretium. In vel consequat risus. Aenean nec sodales nisl, non rhoncus velit. Integer faucibus massa vitae gravida porta. Donec nec ornare nulla. Nullam condimentum semper magna, et sagittis massa.",
  },
  headline2: {
    headlineID: 2,
    headline: "The second headline",
    leftOrRight: "R",
    source: "www.lbc.co.uk",
    descripion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis finibus justo. Sed tincidunt arcu nunc, ac egestas nulla pellentesque pretium. Donec id pretium justo. Ut vitae felis eget mi blandit pretium. In vel consequat risus. Aenean nec sodales nisl, non rhoncus velit. Integer faucibus massa vitae gravida porta. Donec nec ornare nulla. Nullam condimentum semper magna, et sagittis massa.",
  },
  headline3: {
    headlineID: 3,
    headline: "The third headline",
    leftOrRight: "L",
    source: "www.bumface.co.uk",
    descripion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis finibus justo. Sed tincidunt arcu nunc, ac egestas nulla pellentesque pretium. Donec id pretium justo. Ut vitae felis eget mi blandit pretium. In vel consequat risus. Aenean nec sodales nisl, non rhoncus velit. Integer faucibus massa vitae gravida porta. Donec nec ornare nulla. Nullam condimentum semper magna, et sagittis massa.",
  }
}

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
      <img src={require("./images/fakenews5.jpg")} alt="article" />
      <Radio name="radioGroup" inline>
        Fake
      </Radio>{''}
      <Radio name="radioGroup" inline>
        Legit
      </Radio>{' '} 
      </form>   
      <form>
      <img src={require("./images/fakenews6.jpg")} alt="article" />
      <Radio name="radioGroup" inline>
        Fake
      </Radio>{''}
      <Radio name="radioGroup" inline>
        Legit
      </Radio>{' '} 
      </form> 
      <form>
      <img src={require("./images/fakenews7.jpg")} alt="article" />
      <Radio name="radioGroup" inline>
        Fake
      </Radio>{''}
      <Radio name="radioGroup" inline>
        Legit
      </Radio>{' '} 
      </form> 
      <form>
      <img src={require("./images/fakenews8.jpg")} alt="article" />
      <Radio name="radioGroup" inline>
        Fake
      </Radio>{''}
      <Radio name="radioGroup" inline>
        Legit
      </Radio>{' '} 
      </form> 
      <form>
      <img src={require("./images/fakenews5.jpg")} alt="article" />
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
