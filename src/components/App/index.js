import React, { Component } from 'react';
import classnames from 'classnames';

import ElementsList from '../ElementsList';
import GameAlert from '../GameAlert';
import Button from '../Button';

/* External content */
import list from '../../vendors/ExternalList';

/* Styles */
import style from './App.module.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        points: 0,
        step: 0,
        answer: false,
        userStartedInteractions: false,
        isFinished: false,
    }
  }

  handleAnswer = (answer, step, listAnswers) => {
    const { points } = this.state;

    this.setState({ userStartedInteractions: true });

    if(listAnswers[step] === answer) {
      this.setState({
        points: points + 1,
        answer: true,
      })
    } else {
      this.setState({ answer: false });
    }
  };

  handleClick = (answer) => {
    const { step } = this.state;
    const listAnswers = Object.values(list);

    if(step < listAnswers.length) {
      this.handleAnswer(answer, step, listAnswers);

      this.setState({ step: step + 1 });

      if(step === listAnswers.length - 1) {
        setTimeout(() => {
          this.setState({ isFinished: true })
        }, 1500);
      }
    } else if (answer === 'reset') {
      this.setState({
        points: 0,
        step: 0,
        answer: false,
        userStartedInteractions: false,
        isFinished: false,
      })
    }
  };

  render() {
    const { userStartedInteractions, answer, isFinished, points } = this.state;
    const buttonWrapperClass = classnames(style.buttonsWrapper, { [style.isReset] : isFinished });

    return (
      <div className={style.app}>
        <h1 className={style.gameHeading}>True or false game</h1>
        <ElementsList list={list} step={this.state.step} />
        <GameAlert 
          isTouched={userStartedInteractions} 
          answer={answer} 
          isFinished={isFinished} 
          score={points}
        />
        <div className={buttonWrapperClass}>
          {isFinished ? 
            <Button 
              buttonType={false}
              resetButton={true} 
              handleClick={this.handleClick} 
            />
            :
            <React.Fragment>
              <Button 
                buttonType={true} 
                resetButton={false} 
                handleClick={this.handleClick} 
              />
              <Button 
                buttonType={false} 
                resetButton={false} 
                handleClick={this.handleClick} 
              />
            </React.Fragment>
          }
        </div>
      </div>
    );
  }
}

export default App;
