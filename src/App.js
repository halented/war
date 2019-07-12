import React from 'react';
import './App.css';
import Homepage from './Homepage';
import Gamepage from './Gamepage';

class App extends React.Component {

  state = {
    started: false,
    redHand: [],
    blueHand: [],
    cards: {}
  }

  componentDidMount(){
    fetch("http://localhost:3000/cards")
    .then(res=>res.json())
    .then(json=> {
      this.setState({cards: json})
    })
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


// shuflr before messing with the structure of the data:

// shuflr = (suit, name) => {
//   let tempBlue = this.state.blueHand;
//   let tempRed = this.state.redHand;

//   suit.forEach(card => {
//     if(tempBlue.length>= 26){
//       tempRed.push({[name]: card})
//     }
//     else if(tempRed.length>=26){
//       tempBlue.push({[name]: card})
//     }
//     else if((Math.floor(Math.random()*100))%2 === 0){
//       tempBlue.push({[name]: card})
//     }
//     else if(tempRed) tempRed.push({[name]: card})
//   })
//   this.setState({redHand: tempRed, blueHand: tempBlue})
// }