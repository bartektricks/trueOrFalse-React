import React, { Component } from 'react';

import './_gameAlert.scss';

class GameAlert extends Component {

    returnAlert = () => {

        const { answer } = this.props;

        switch (answer) {
            case 'correct':
                return (
                    <p className='gameAlert isCorrect'>
                        Correct answer
                    </p>
                )
            break;
            case 'wrong':
                return (
                    <p className='gameAlert isWrong'>
                        Wrong answer
                    </p>
                )
            break;
            default:
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
