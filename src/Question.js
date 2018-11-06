import React, { Component } from 'react';
import './App.css';
import {Alert, Radio, Button} from 'react-bootstrap';

class Question extends Component {
  state = {
    currentQuestionIndex: 0,
    selectedAnswer: 0,
    answerCheck: true,
    clearCheck: true,
    headlines: [
     {
        headlineID: 0,
        headline: "Trump ramps up rhetoric on undocumented immigrants: 'These aren't people. These are animals.'",
        answer: "fake",
        leftOrRight: "L",
        source: "Reported by USA Today",
        sourceurl: "",
        proofurl: "https://www.bbc.co.uk/news/av/world-us-canada-44148697/trump-immigrant-gangs-animals-not-people",
        explainer: "Surprise! If you listen to his speach, Trump was not comparing all immegrants to animals, only the ones in 'problem' gangs.",
        descripion: "",
      },
      {
        headlineID: 1,
        headline: "Brexit Dividend will provide extra funding for the NHS",
        answer: "fake",
        leftOrRight: "R",        
        source: "Theresa May as Prime Minister (2018)",
        sourceurl: null,
        explainer: "This has been widely refuted and is now considered by many to be misleading.",
        proofurl: "https://www.ft.com/content/845f9e56-cd4c-11e8-9fe5-24ad351828ab",
        descripion: "[....] No more sending vast sums of money each year to the EU – instead a Brexit dividend to spend on domestic priorities like our long-term plan for the NHS.",
      },
      {
        headlineID: 2,
        headline: "Australia is moving further north, meaning many will have to adjust their sat navs in the future.",
        answer: "legit",
        leftOrRight: "N",
        source: "A guy in the pub",
        sourceurl: null,
        explainer: "Umm, yep, technically the contenant of Austrialia is moving further north so this is true.",
        proofurl: "https://www.bbc.co.uk/cbbc/quizzes/real-or-fake-news-quiz",
        descripion: "",
      },
      {
        headlineID: 3,
        headline: "Pope Francis has Backed president Trump",
        answer: "fake",
        leftOrRight: "R",        
        source: "www.dailypresser.com",
        sourceurl: null,
        explainer: "As Trump would say, NEVER HAPPENED, OK. Seriously, despite this fake, it did not stop the story from potentially being seen by thousands of users on Facebook.",
        proofurl: "https://davidbuckingham.net/2017/01/12/fake-news-is-media-literacy-the-answer/",
        descripion: "",
      },
      {
        headlineID: 4,
        headline: "German Chancellor Angela Merkel calls for German-Led EU army",
        answer: "fake",
        leftOrRight: "R",        
        source: "Daily Express",
        sourceurl: "https://www.express.co.uk/news/world/753750/Angela-Merkel-Germany-EU-army-Trump-Brexit",
        explainer: "Fake! This was 'corrected' by The Express after many months, the orignal story that claimed that German Chancellor Angela Merkel was calling for an EU army to defend Europe had no real substantiation for the claims but nonetheless was picked up by several other news outlets as well as social media users.",
        proofurl: "https://inews.co.uk/opinion/top-ten-fake-misleading-news-stories-2017/",
        descripion: "ANGELA Merkel has renewed her call for the European Union to have its own army, warning the bloc will not be able to rely on others to guarantee its security with Donald Trump in the White House and Britain set to leave.",
      },
      {
        headlineID: 5,
        headline: "Trump wanted to ban all muslims from the US",
        answer: "fake",
        leftOrRight: "R",        
        source: "Panel show guest on TV",
        sourceurl: null,
        explainer: "Trump's widely condemned 'Muslim Ban' was an interesting one. Technically he did not 'ban all muslims' as reported, instead banning countries which had a high Muslim population. However some will say that he was deliberatly vague, in order to fit in with the ideals of his far right core support.",
        proofurl: "https://davidbuckingham.net/2017/01/12/fake-news-is-media-literacy-the-answer/",
        descripion: "",
      },
      {
        headlineID: 6,
        headline: "Leaving the EU will generate £350m a week for Britain, which could be spent towards the NHS",
        answer: "fake",
        leftOrRight: "R",        
        source: "Leave.eu, and on the side of a Bus",
        sourceurl: null,
        explainer: "FullFact (the independant Fact Checking charity) says this best: This is wrong, it’s more like £250 million a week. In any case the impact on the economy from changes to trade after leaving the EU is likely to be far bigger than savings from the UK’s membership fee.",
        proofurl: "https://fullfact.org/europe/350-million-week-boris-johnson-statistics-authority-misuse/",
        descripion: "",
      },
      {
        headlineID: 7,
        headline: "Influx of immigrants costs every UK household £350 a year",
        answer: "fake",
        leftOrRight: "R",
        source: "Daily Mail (2007)",
        sourceurl: "https://www.dailymail.co.uk/news/article-488011/Influx-immigrants-costs-UK-household-350-year.html",
        proofurl: "https://fullfact.org/immigration/how-immigrants-affect-public-finances/",
        explainer: "This one isn't so straightforward. Although there is a source provided, it is only one person and not a research group. The retoric of the story also fits in well with the tone of the Daily Mail, which should throw up alarm bells. There now seems to be a universal consensus that immegrants to the UK actually have a net positive effect on the economy. See the FullFact link below for more information",
        descripion: "Labour's 'open door' policy on immigration costs every household £350 a year, it was claimed yesterday. David Coleman, an Oxford University academic, puts the total annual bill to the taxpayer at almost £8.8billion. In a submission to a House of Lords committee, he said there had been an 'absent-minded commitment' to increase the population by one million every five years...",
      },
      {
        headlineID: 8,
        headline: "Sadiq Khan gets reprimanded by the Queen for his comments on Trump",
        answer: "fake",
        leftOrRight: "R",
        source: "Multiple US pulications",
        sourceurl: null,
        explainer: "FAKE. The Queen has to remain impartial on items like this, and this was no exception. Arguably Trump's comments and lies about Sadqiq were more derogatory.",
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
    this.setState({clearCheck: true})
  }

  validation = () => {
    if (this.state.selectedAnswer === 0) {
      alert('Select a fucking answer. \nIt\'s that simple. \n\nI\'m going for lie down your stupid is making me tired.')
      return false}
      else {return true}
  }

  renderCheck = () => {
    if (this.validation() === false) {console.log('input not selected')} else {
    let answer = this.state.headlines[this.state.currentQuestionIndex].answer
    const selectedAnswer = this.state.selectedAnswer
    let check = 0
    selectedAnswer === answer ? check = true : check = false
    if (check === true) {
      this.setState({answerCheck: true})
      this.setState({clearCheck: false})
    } else {
    this.setState({answerCheck: false})
    this.setState({clearCheck: false})
  }}}
  
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
    for (var i = 0; i < headlineArray.length; ++i) {// eslint-disable-next-line
      if (responseArray[i].answer == headlineArray[i].answer) {
        score +=1
      }
    }
  return score;
  }
  
 
  render() {
    let currentquestion = this.state.headlines[this.state.currentQuestionIndex]
    let button
    if (this.state.clearCheck) {
      button = <Button bsStyle="warning" type="submit" href="#" onClick={this.renderCheck}>Check</Button>
    } else {
      button = <Button bsStyle="primary" type="submit" href="#" onClick={this.nextQuestion}>Next Question</Button>
    }

    let useralert = () => {if (this.state.answerCheck === false) {
      useralert = <Alert bsStyle='danger'><strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.</Alert>
    } else {
      useralert = <Alert bsStyle='success'><strong>You got it correct!</strong></Alert>
    }}

    if (!this.state.clearCheck) {
      useralert()
   }

    return (
      <div className="questionArea">
      <h1 className="divheadline">{currentquestion.headline}</h1>
      <h4 className="divsource">Source: {currentquestion.source}</h4> <br />
      <p>{currentquestion.descripion}</p> 
      <form>
      <Radio className="radiobuttonfake" value="fake" checked={this.state.selectedAnswer === 'fake'} onChange={this.handleChange} inline>
        Fake
      </Radio>{''}
      <Radio className="radiobuttonlegit" value="legit" checked={this.state.selectedAnswer === 'legit'} onChange={this.handleChange} inline>
        Legit
      </Radio>{''}
      <br /> <br /> <br />
      {useralert}<br />
      <p>
      {!this.state.clearCheck ? <h3>Explainer:</h3> : null } 
      {!this.state.clearCheck ? this.state.headlines[this.state.currentQuestionIndex].explainer : null } <br />
      {!this.state.clearCheck ? this.state.headlines[this.state.currentQuestionIndex].proofurl : null } <br /> <br />
      </p>
      {button}<br />

      </form><br />
      </div>
    )
  }
}

export default Question;
