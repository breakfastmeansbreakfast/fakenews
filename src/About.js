import React, { Component } from 'react';
import './App.css';
import {Alert, Grid, Row, Col} from 'react-bootstrap';


const title = "Creators of the Fake News App!";

class About extends Component {
  render() {
    return (
    <div className="Learnarea">
      <h1>{title}</h1>
      <Alert>Creative Team</Alert>
      <Grid>
  <Row>
    <Col xs={6} md={4}>
      <img src={require("./images/tom.jpg")} alt="tom eating" />
      <h3>Tom Dunn</h3>
        <p>Mr Hackathon and voice over artist #askalan</p>
    </Col>
    <Col xs={6} md={4}>
    <img src={require("./images/linda.jpg")} alt="bali Linda" />
        <h3>Linda Tamakaha</h3>
        <p>Needs another holiday</p>
    </Col>
    <Col xs={6} md={4}>
    <img src={require("./images/ben.jpg")} alt="suited and booted" />
        <h3>Ben Mason</h3>
        <p>Will kick you in the face</p>
    </Col>
  </Row>
</Grid>;
</div>
    );
  }
}

export default About;