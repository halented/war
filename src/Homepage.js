import React, { Component } from 'react';


class Homepage extends Component {


    render(){
        return (
            <div className='homie'>
                <h1>War!</h1>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <button style={{color: "blue"}} onClick={this.props.startGame}>Let's get it started</button>
                <br/>
                <button style={{color: "blue"}} onClick={this.props.startGame}>(hot)</button>
                <br/>
                <button style={{color: "blue"}} onClick={this.props.startGame}>Let's get it started</button>
                <br/>
                <button style={{color: "blue"}} onClick={this.props.startGame}>(in here)</button>
            </div>
        )
    }
}

export default Homepage;