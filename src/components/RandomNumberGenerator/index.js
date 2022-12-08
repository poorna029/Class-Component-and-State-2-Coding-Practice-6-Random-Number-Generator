// Write your code here
// // Write your code here

import './index.css'

import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generate = () => {
    this.setState({number: Math.round(Math.random() * 100)})
  }

  render() {
    const {number} = this.state
    return (
      <div className="main">
        <h1>Random Number</h1>
        <p>Generate a random number in the range of 0 to 100</p>
        <button onClick={this.generate}>Generate</button>
        <p>{number}</p>
      </div>
    )
  }
}

export default RandomNumberGenerator
