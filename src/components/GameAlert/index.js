import React, { Component } from 'react';

/* Styles */
import './_gameAlert.scss';

class GameAlert extends Component {

    returnAlert = () => {

        const { answer } = this.props;

        switch (answer) {
            case true:
                return (
                    <p className='gameAlert isCorrect'>
                        Correct answer
                    </p>
                )
            case false:
                return (
                    <p className='gameAlert isWrong'>
                        Wrong answer
                    </p>
                )
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
