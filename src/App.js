import React, { Component } from 'react';
import Lottery from './components/lottery/lottery.js'

export default class index extends Component {
  state = {
    num: []
  }

  numGen = () => {
    let arr = [];
    do {
      let num = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
      arr.push(num);
      arr = arr.filter((item, index) => {
        return arr.indexOf(item) === index
      });
    } while (arr.length < 5);
    return arr.sort((a, b) => {
      return a - b
    });
  }

  genNum = () => {
    let numArr = [...this.state.num];
    numArr = [...this.numGen()];
    this.setState({ num:numArr })
  }

  render = () => {
    return (<Lottery genNum={this.genNum} num={this.state.num} />)
  }
}
