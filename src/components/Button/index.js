import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/* Styles */
import style from './Button.module.scss';

class Button extends Component {
    static propTypes = {
        buttonType: PropTypes.bool,
        handleClick: PropTypes.func,
    }

    handleButtonState = () => {
        this.props.handleClick(this.props.buttonType);
    }

    returnButton = () => {
        const { buttonType } = this.props;
        const buttonClasses = classNames(style.gameButton, {
            [style.isTrue]: buttonType,
            [style.isFalse]: !buttonType,
        });

        return (
            <button className={buttonClasses} onClick={this.handleButtonState}>
                    {buttonType ? 'True' : 'False'}
            </button>
        )
    }

    render() {
        return (
            this.returnButton()
        )
    }
}

export default Button;
