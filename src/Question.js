import React, { Component } from 'react';
import './App.css';
import {Radio, Button} from 'react-bootstrap';
// import axios from 'axios';

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
    currentQuestionIndex: 0,
    selectedAnswer: 0,
    headlines: [
      {
        headlineID: 0,
        headline: "Influx of immigrants costs every UK household £350 a year",
        answer: "fake",
        leftOrRight: "R",
        source: "Daily Mail (2007)",
        sourceurl: "https://www.dailymail.co.uk/news/article-488011/Influx-immigrants-costs-UK-household-350-year.html",
        proofurl: "",
        descripion: "Labour's 'open door' policy on immigration costs every household £350 a year, it was claimed yesterday. David Coleman, an Oxford University academic, puts the total annual bill to the taxpayer at almost £8.8billion. In a submission to a House of Lords committee, he said there had been an 'absent-minded commitment' to increase the population by one million every five years...",
      },
     {
        headlineID: 1,
        headline: "Trump ramps up rhetoric on undocumented immigrants: 'These aren't people. These are animals.'",
        answer: "legit",
        leftOrRight: "L",
        source: "USA Today (2017)",
        sourceurl: "",
        proofurl: null,
        descripion: "President Trump used extraordinarily harsh rhetoric to renew his call for stronger immigration laws Wednesday, calling undocumented immigrants 'animals' and venting frustration at Mexican officials who he said 'do nothing' to help the United States.",
      },
      {
        headlineID: 2,
        headline: "Brexit Dividend to provide extra funding for the NHS",
        answer: "fake",
        leftOrRight: "R",        
        source: "Theresa May as Prime Minister (2018)",
        sourceurl: null,
        proofurl: "https://www.ft.com/content/845f9e56-cd4c-11e8-9fe5-24ad351828ab",
        descripion: "[....] No more sending vast sums of money each year to the EU – instead a Brexit dividend to spend on domestic priorities like our long-term plan for the NHS.",
      },
      {
        headlineID: 3,
        headline: "Australia is moving further north",
        answer: "legit",
        leftOrRight: "N",        
        source: "A guy in the pub",
        sourceurl: null,
        proofurl: "https://www.bbc.co.uk/cbbc/quizzes/real-or-fake-news-quiz",
        descripion: "",
      },
      {
        headlineID: 4,
        headline: "Pope Francis has Backed president Trump",
        answer: "fake",
        leftOrRight: "R",        
        source: "www.dailypresser.com",
        sourceurl: null,
        proofurl: "https://davidbuckingham.net/2017/01/12/fake-news-is-media-literacy-the-answer/",
        descripion: "",
      },
      {
        headlineID: 5,
        headline: "Trump wanted to ban all muslims from the US",
        answer: "fake",
        leftOrRight: "R",        
        source: "Panel show guest on TV",
        sourceurl: null,
        proofurl: "https://davidbuckingham.net/2017/01/12/fake-news-is-media-literacy-the-answer/",
        descripion: "",
      },
      {
        headlineID: 6,
        headline: "Leaving the EU will generate £350m a week for Britain, which could be spent towards the NHS",
        answer: "fake",
        leftOrRight: "R",        
        source: "Leave.eu",
        sourceurl: null,
        proofurl: "https://davidbuckingham.net/2017/01/12/fake-news-is-media-literacy-the-answer/",
        descripion: "",
      },
      {
        headlineID: 7,
        headline: "German Chancellor Angela Merkel calls for German-Led EU army",
        answer: "fake",
        leftOrRight: "R",        
        source: "Daily Express",
        sourceurl: "https://www.express.co.uk/news/world/753750/Angela-Merkel-Germany-EU-army-Trump-Brexit",
        proofurl: "https://inews.co.uk/opinion/top-ten-fake-misleading-news-stories-2017/",
        descripion: "ANGELA Merkel has renewed her call for the European Union to have its own army, warning the bloc will not be able to rely on others to guarantee its security with Donald Trump in the White House and Britain set to leave.",
      },
      {
        headlineID: 8,
        headline: "Sadiq Khan gets reprimanded by the Queen for his comments on Trump",
        answer: "fake",
        leftOrRight: "R",
        source: "Multiple US pulications",
        sourceurl: null,
        proofurl: "https://inews.co.uk/opinion/top-ten-fake-misleading-news-stories-2017/",
        descripion: "Sadiq Khan had been reprimanded by the Queen for his comments and that the UK media were in support of his telling off.",
      },
    ],
    leftScore: 0,
    rightScore: 0,
    responses: [
      {
        answer: null,
        headlineID: null,
      },
      {
        answer: null,
        headlineID: null,
      },
      {
        answer: null,
        headlineID: null,
      },
      {
        answer: null,
        headlineID: null,
      },
      {
        answer: null,
        headlineID: null,
      },
      {
        answer: null,
        headlineID: null,
      },
      {
        answer: null,
        headlineID: null,
      },
      {
        answer: null,
        headlineID: null,
      },
      {
        answer: null,
        headlineID: null,
      },
    ],
  }

  // componentDidMount() {
  //   axios.get(`http://localhost:9999/question`)
  //     .then(res => {
  //       const question = res.data;
  //       this.setState({ question });        
  //       headline = this.state.question.map(question => question.headline)
  //       console.log(headline)
  //     })
  // }

  handleChange = (changeEvent) => {
    this.setState({
      selectedAnswer: changeEvent.target.value
    }); 
  }

  savetoHistory = () => {
    let myhistory = [...this.state.responses]
    let myhistoryitem = myhistory[this.state.currentQuestionIndex]
    myhistoryitem.answer = this.state.selectedAnswer
    let currentquestion = this.state.headlines[this.state.currentQuestionIndex]
    myhistoryitem.headlineID = currentquestion.headlineID
    myhistoryitem[this.state.currentQuestionIndex] = myhistory;
    let responses = myhistory
    this.setState({responses}); 
    this.setState({selectedAnswer: 0})
  }

  validation = () => {
    if (this.state.selectedAnswer === 0) {
      alert('Select a fucking answer. \nIt\'s that simple. \n\nI\'m going for lie down your stupid is making me tired.')
      return false}
      else {return true}
  }
  
  nextQuestion = () => {
    if (this.validation() === false) {console.log('input not selected')} else {
    if (this.state.currentQuestionIndex === this.state.headlines.length -1) {
      this.savetoHistory()
      let score = this.getScore()
      this.props.history.push({pathname: '/results', state: {score: score, message: `Well.. your results are in! You scored ${score} out of 9.`, responses: this.state.responses, headlines: this.state.headlines}});
    } else {
    this.savetoHistory()
    this.setState({currentQuestionIndex: this.state.currentQuestionIndex +1})
  }}}

  getScore = () => {
    let responseArray = this.state.responses
    let headlineArray = this.state.headlines
    let score = 0;
    for (var i = 0; i < headlineArray.length; ++i) {
      if (responseArray[i].answer == headlineArray[i].answer) {
        score +=1
      } else {
      console.log('wrong answer');
      }
    }
    console.log(score)
  return score;
  }

  render() {
    let currentquestion = this.state.headlines[this.state.currentQuestionIndex]
    return (
      <div className="questionArea">
      <h1>{currentquestion.headline}</h1>
      <strong>{currentquestion.source}</strong>
      <p>{currentquestion.descripion}</p>
      <form>
      {/* <img src={require(this.state.currentquestion.imageUrl)} alt={this.state.currentquestion.headline} /> */}
      <Radio className="radiobuttonfake" value="fake" checked={this.state.selectedAnswer === 'fake'} onChange={this.handleChange} inline>
        Fake
      </Radio>{''}
      <Radio className="radiobuttonlegit" value="legit" checked={this.state.selectedAnswer === 'legit'} onChange={this.handleChange} inline>
        Legit
      </Radio>{''}
      <br /> <br /> <br />
      <Button bsStyle="warning" type="submit" href="#" onClick={this.nextQuestion}>Submit</Button>
      </form>      
      </div>
    )
  }
}

export default Question;
