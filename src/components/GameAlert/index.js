import React, { Component } from 'react';

import './_gameAlert.scss';

class GameAlert extends Component {

    returnAlert = () => {

        const { answer } = this.props;

        if(answer === 'correct') {
            return (
                <p className='gameAlert isCorrect'>
                    Correct answer
                </p>
            )
        } else if (answer === 'wrong') {
            return (
                <p className='gameAlert isWrong'>
                    Wrong answer
                </p>
            )
        } else {
            return (
                <p className='gameAlert'>
                    Choose your answer
                </p>
            )
        }
    }

    render() {
        return (
            <div>
                {this.returnAlert()}
            </div>
        )
    }
}

export default GameAlert;
