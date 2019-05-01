import React, { Component } from 'react';
import Coin from './Coin';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      heads: true,
      countFlips: 0,
      countHeads: 0,
      countTails: 0,
      flipping: false,
      disabled: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  headOrTails() {
    let random = Math.floor(Math.random() * 2)
    return random === 1 ? true : false; 
  }

  handleClick() {
    let res = this.headOrTails()
    
    this.setState({
      flipping: true,
      disabled: true,
    })

    setTimeout(() => {
      if (res) {
        this.setState((prevState) => {
          return {
            heads: res,
            countFlips: prevState.countFlips + 1,
            countHeads: prevState.countHeads + 1,
            flipping: false,
            disabled: false,
          }
        })
      } else {
        this.setState((prevState) => {
          return {
            heads: res,
            countFlips: prevState.countFlips + 1,
            countTails: prevState.countTails + 1,
            flipping: false,
            disabled: false,
          }
        })
      }
    }, 800)
  }
  
  render() { 
    return ( 
      <>
        <h1>Let's flip a coin</h1>
        <Coin side={this.state.heads} flipping={this.state.flipping} />
        <button onClick={this.handleClick} disabled={this.state.disabled}>{this.state.disabled ? 'Flipping...' : 'Flip me'}</button>
        <h3>Out of {this.state.countFlips}, there have been {this.state.countHeads} heads and {this.state.countTails} tails.</h3>
      </>
     );
  }
}
 
export default App;