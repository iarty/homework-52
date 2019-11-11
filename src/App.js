import React, { Component } from 'react';
import Lottery from './components/lottery/lottery.js'

export default class index extends Component {
  state = {
    num: []
  }
  rand = () => {
    let arr = [];
    for (let index = 0; index < 4; index++) {
      arr.push(Math.floor(Math.random() * (36 - 5 + 1)) + 5);
    }
    return arr.sort((a, b) => { return a - b })
  }
  genNum = () => {
    this.setState({
      num: this.rand()
    })
  }
  render = () => {
    return (<Lottery genNum={this.genNum} num={this.state.num} />)
  }
}
