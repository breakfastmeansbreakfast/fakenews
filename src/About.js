import React, { Component } from 'react';
import './App.css';
import {Alert, Grid, Row, Col, Thumbnail, Image} from 'react-bootstrap';


const title = "The creators of the fake news App!";

class About extends Component {

  render() {
    return (
    <div className="Learnarea">
      <h1>{title}</h1>
      <Alert>Creative Team</Alert>
      <Grid>
  <Row>
    <Col xs={6} md={4}>
      <Thumbnail src="/thumbnaildiv.png" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="/thumbnaildiv.png" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="/baliLinda.png" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
      </Thumbnail>
    </Col>
  </Row>
</Grid>;
</div>
    );
  }
}

export default About;