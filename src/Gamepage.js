import React, { Component } from 'react';
import blueBack from './blueBack.jpg';
import redBack from './redBack.png';
import toaster from 'toasted-notes';



class Gamepage extends Component {

    quit = () => {
        if(window.confirm("This will quit the game for both players, how fun. Are you sure?")){
            window.location='/'
        }
    }

    play = (hand, el) => {
        let selected = hand[Math.floor(Math.random()*hand.length)]
        let card = document.getElementById([el])
        if(card.textContent === ''){
            card.style = {display: 'block'}
            card.textContent = selected
            card.className = "active"
        }
        else {
            alert("please wait for the other player to play")
        }

        this.compareCards()
    }

    war = () => {
        toaster.notify("there's a war we all lose")
    }
    
    compareCards = () => {
        let red = document.getElementById('rPlay');
        let blue = document.getElementById('bPlay');
        if(red.className === 'active' && blue.className === 'active') {
            let tempBlue = this.props.blueHand;
            let tempRed = this.props.redHand;

            if(parseInt(red.textContent)>parseInt(blue.textContent)){
                let index = tempBlue.indexOf(blue.textContent)
                tempBlue.splice(index, 1)
                tempRed.push(blue.textContent)
                toaster.notify('red win!', {
                    duration: 2000,
                    color: 'red'
                })
                setTimeout(function(){
                    red.textContent = '';
                    blue.textContent = '';
                }, 2500)
                }
            else if(parseInt(blue.textContent)>parseInt(red.textContent)){
                let index = tempRed.indexOf(red.textContent)
                tempRed.splice(index, 1)
                tempBlue.push(red.textContent)
                toaster.notify('blue win!', {
                    duration: 2000,
                    color: 'blue'
                })
                setTimeout(function(){
                    red.textContent = '';
                    blue.textContent = '';
                }, 2500)
            }
            else if(parseInt(blue.textContent) === parseInt(red.textContent)){
                this.war()
            }
            this.setState({blueHand: tempBlue, redHand: tempRed})
        }
    }
    
    render(){
        return (
            <div className='gamie'>
                <img alt='the red card' src={redBack} className='card' onClick={()=>this.play(this.props.redHand, 'rPlay')} id='red'/>
                <p id='redcount'>Red Deck: {this.props.redHand.length}</p>
                <img alt='the blue card' src={blueBack} className='card' onClick={()=>this.play(this.props.blueHand, 'bPlay')} id='blue'/>
                <p id='bluecount'>Blue Deck: {this.props.blueHand.length}</p>
                    <h2 id='rPlay' style={{display: 'none'}} className='inactive'></h2>
                    <h2 id='bPlay' style={{display: 'none'}} className='inactive'></h2>
                <button onClick={this.quit} id='quit'>I Quit</button>
            </div>
        )
    }
}

export default Gamepage;
