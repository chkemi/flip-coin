import React, { Component } from 'react';
import Coin from './Coin';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      heads: true,
      countFlips: 0,
      countHeads: 0,
      countTails: 0
    }
  }
  render() { 
    return ( 
      <>
      <h1>Let's flip a coin</h1>
      <Coin side={this.state.heads} />
      <button>Flip me</button>
      <p>Out of {this.state.countFlips}, there have been {this.state.countHeads} heads and {this.state.countTails} tails.</p>
      </>
     );
  }
}
 
export default App;