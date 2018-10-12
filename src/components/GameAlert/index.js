import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './GameAlert.module.scss';

class GameAlert extends Component {
    static propTypes = {
        isTouched: PropTypes.bool,
        answer: PropTypes.bool,
        isFinished: PropTypes.bool,
        score: PropTypes.number,
    };

    returnAlert = (answer) => {
        const alertClasses = classNames(style.gameAlert, {
            [style.isCorrect]: answer,
            [style.isWrong]: !answer,
        });

        return (
            <p className={alertClasses}>
                {answer ? 'Correct Answer!' : 'Wrong Answer!'}
            </p>
        )
    };

    render() {
        const { answer, isTouched, isFinished, score } = this.props;

        return (
            <React.Fragment>
                {isTouched ?
                    isFinished ? 
                    <p className={style.gameAlert}>
                        You scored {score} points
                    </p>
                    :
                    this.returnAlert(answer)
                :
                    <p className={style.gameAlert}>
                        Select your answer
                    </p>
                }
            </React.Fragment>
        )
    }
}

export default GameAlert;
