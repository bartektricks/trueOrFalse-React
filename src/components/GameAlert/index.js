import React, { Component } from 'react';

import './_gameAlert.scss';

class GameAlert extends Component {

    returnAlert = () => {

        const { answer } = this.props;

        if(answer === 'correct') {
            return (
                <p className='gameAlert isCorrect'>
                    Your answer is {answer}
                </p>
            )
        } else if (answer === 'wrong') {
            return (
                <p className='gameAlert isWrong'>
                    Your answer is {answer}
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
