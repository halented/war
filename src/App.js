import React from 'react';
import './App.css';
import Homepage from './Homepage';
import Gamepage from './Gamepage';

class App extends React.Component {

  state = {
    started: false,
    redHand: [],
    blueHand: [],
    suits: ["♥", "♠", "♦", "♣"]
  }

  startGame = () => {
    this.setState({ started: true })
    this.shuflr()
  }

  initialDeal = () => {
    this.shuflr(this.state.cards["♣"], "♣")
    this.shuflr(this.state.cards["♦"], "♦")
    this.shuflr(this.state.cards["♥"], "♥")
    this.shuflr(this.state.cards["♠"], "♠")
  }

  shuflr = () => {
    let blueHand = [];
    let redHand = [];
    let fullShuffle = []
    let counter = 0
    this.state.suits.forEach(suit => {
      for (let i = 2; i < 15; i++) {
        console.log(++counter)
        let rand = Math.floor(Math.random() * 2)
        if (rand && blueHand.length < 26) {
          // add to blueHand
          blueHand.push(`${i} of ${suit}`)
        }
        else if (redHand.length < 26) {
          // add to redHand
          redHand.push(`${i} of ${suit}`)
        }
        else {
          // winds up with a chunk of leftovers being sent to the blue hand in order -- no good
          blueHand.push(`${i} of ${suit}`)
        }
      }
    })
    console.log(redHand, blueHand)
    // this.setState({redHand, blueHand})
  }

  render() {
    return (
      <div className="App">
        {this.state.started ?
          <Gamepage redHand={this.state.redHand} blueHand={this.state.blueHand} />
          :
          <Homepage startGame={this.startGame} />
        }
      </div>
    );
  }
}

export default App;