import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/* Styles */
import style from './Button.module.scss';

class Button extends Component {
    static propTypes = {
        buttonType: PropTypes.bool,
        resetButton: PropTypes.bool,
        handleClick: PropTypes.func,
    }

    handleButtonState = () => {
        const { resetButton, buttonType } = this.props;
        
        this.props.handleClick( (resetButton) ? 'reset' : buttonType );
    }

    returnButton = () => {
        const { buttonType, resetButton } = this.props;
        const buttonClasses = classNames(style.gameButton, {
            [style.isTrue]: buttonType,
            [style.isFalse]: !buttonType,
        });

        return (
            <button className={ resetButton ? style.gameButton : buttonClasses } onClick={this.handleButtonState}>
                    { resetButton ? 'Reset' : buttonType ? 'True' : 'False' }
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
