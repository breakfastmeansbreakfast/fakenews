import React, { Component } from 'react';
import './App.css';
import {Alert, Grid, Row, Col} from 'react-bootstrap';

const title = "Fake News";

class Learn extends Component {
  render() {
    return (
      <div className="Learnarea">
      <h1>{title}</h1>
      <Alert>What is Fake News?</Alert>
      <p>"Fake news" was not a term many people used two years ago, but it is now seen as one of the greatest threats to democracy, free debate and the Western order.
      <br/>As well as being a favourite term of Donald Trump, it was also named 2017's word of the year, raising tensions between nations, and may lead to regulation of social media.
      <br/>And yet, nobody can agree on what it is, the extent of the problem, and what to do about it. Here's everything you need to know.</p>
      <br/>
      <h2>The Origins of Fake News</h2>
      <br/>
      <p>Governments and powerful individuals have used information as a weapon for millennia, to boost their support and quash dissidence.  
      <br/>
      Octavian famously used a campaign of disinformation to aid his victory over Marc Anthony in the final war of the Roman Republic.<br/>
      In its aftermath, he changed his name to Augustus, and dispatched a flattering and youthful image of himself throughout the Empire, maintaining its use in his old age.
      <br/>
      In the 20th century, new forms of mass communication allowed propaganda's scale and persuasive power to grow, particularly during wartime and in fascist regimes.
      <br/>This sort of propaganda was largely funded and controlled by governments, but the blatant bias it carried waned as the ideological struggles became less apparent.<br/>Added to that, as populations became more used to mass communication, they could more easily see through it.  
      </p>
      <br />
      <Grid>
        <Row>
          <Col xs={6} md={4}>
          <div class="text-center">
            <img src={require("./images/fakenews.jpg")} class="rounded mx-auto d-block" alt="instructions" />
          </div>
          </Col>
        </Row>
      </Grid>
    </div>
    )
  }
}

export default Learn;