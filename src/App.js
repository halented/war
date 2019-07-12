import React from 'react';
import './App.css';
import Homepage from './Homepage';
import Gamepage from './Gamepage';

class App extends React.Component {

  state = {
    started: false,
    redHand: [],
    blueHand: [],
    cards: {
        "♥": [
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14
        ],
        "♠": [
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14
        ],
        "♦": [
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14
        ],
        "♣": [
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14
        ]
      }
  }

  startGame = () => {
    this.setState({started: true})
    this.initialDeal()
  }

  initialDeal = () => {
    this.shuflr(this.state.cards["♣"], "♣")
    this.shuflr(this.state.cards["♦"], "♦")
    this.shuflr(this.state.cards["♥"], "♥")
    this.shuflr(this.state.cards["♠"], "♠")
  }

  shuflr = (suit, name) => {
    let tempBlue = this.state.blueHand;
    let tempRed = this.state.redHand;

    suit.forEach(card => {
      if(tempBlue.length>= 26){
        tempRed.push(`${card}${name}`)
      }
      else if(tempRed.length>=26){
        tempBlue.push(`${card}${name}`)
      }
      else if((Math.floor(Math.random()*100))%2 === 0){
        tempBlue.push(`${card}${name}`)
      }
      else if(tempRed) tempRed.push(`${card}${name}`)
    })
    this.setState({redHand: tempRed, blueHand: tempBlue})
  }

  render() {
      return (
      <div className="App">
        {this.state.started?
        <Gamepage redHand={this.state.redHand} blueHand={this.state.blueHand}/>
        :
        <Homepage startGame={this.startGame}/>
        }
      </div>
    );
  }
}

export default App;