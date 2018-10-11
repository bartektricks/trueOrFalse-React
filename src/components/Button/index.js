import React, { Component } from 'react';

/* Styles */
import './_button.scss';

class Button extends Component {

    handleButtonState = () => {
        this.props.handleClick(this.props.buttonType);
    }

    returnButton = () => {
        const { buttonType } = this.props;

        if( buttonType === true ) {
            return (
                <button className='gameButton isTrue' onClick={this.handleButtonState}>
                    True
                </button>
            )
        } else if ( buttonType === false ) {
            return (
                <button className='gameButton isFalse' onClick={this.handleButtonState}>
                    False
                </button>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.returnButton()}
            </React.Fragment>
        )
    }
}

export default Button;
