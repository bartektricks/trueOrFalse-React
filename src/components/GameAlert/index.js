import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './GameAlert.module.scss';

class GameAlert extends Component {
    static propTypes = {
        isTouched: PropTypes.bool,
        answer: PropTypes.bool,
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
        const { answer, isTouched } = this.props;

        return (
            <React.Fragment>
                {isTouched ?
                    this.returnAlert(answer)
                :
                    <p className={style.gameAlert}>
                        Do something mofo!
                    </p>
                }
            </React.Fragment>
        )
    }
}

export default GameAlert;
