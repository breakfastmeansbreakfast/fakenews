import React, { Component } from 'react';
import './App.css';
import { Circle } from 'rc-progress';

class Results extends Component {
  render() {
    const totalQ = 16
    const leftP = this.props.location.state.leftScore === 0 ? 0.05 : this.props.location.state.leftScore / totalQ
    const rightP = this.props.location.state.rightScore === 0 ? 0.05 : this.props.location.state.rightScore / totalQ

    return (
    <div className="questionArea">
      {console.log(this.props.location.state.leftScore )}
      {console.log(this.props.location.state.rightScore )}
      {console.log(this.props)}
      <h1>Results</h1>
      <h2>{this.props.location.state.message}</h2>
      <h4>Nice work completing the test.<br /> Please learn more about Fake News and how to spot it by clicking the Learn tab above.</h4> <br />
      <h2>Your swing</h2>
      <h4>The higher these bars are the more swayed/biased you are by default by left or right wing arguements.</h4><br /> <br />
      <div className="circleContainers" />

      <div className="circleLeft">
      <strong className="circleText">Left-wing persuasion</strong> <br />
        <Circle percent={leftP * 100} strokeWidth="4" strokeColor="#4da6ff" className="leftCircle"/>
        {/* <p className="circleTextP">{leftP.toPrecision(2)}%</p>  */}
        <br /> <br /></div>
      <div className="circleRight">
      <strong className="circleText">Right-wing persuasion</strong> <br />
      <Circle percent={rightP * 100} strokeWidth="4" strokeColor="#cc6699" className="rightCircle"/>
      {/* <p className="circleTextP">{rightP.toPrecision(2)}%</p> */}
      </div>
      </div>
);
}}

export default Results;