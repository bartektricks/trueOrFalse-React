import React, { Component } from 'react';

import ElementsList from '../ElementsList';
import GameAlert from '../GameAlert';
import Button from '../Button';

/* External content */
import list from '../../vendors/ExternalList';

/* Styles */
import './_app.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        points: 0,
        step: 0,
        answer: false,
        userStartedInteractions: false,
    }
  }

  handleAnswer = (answer, step, listAnswers) => {
    const { points } = this.state;

    this.setState({
        userStartedInteractions: true
    });

    if(listAnswers[step] === answer) {
      this.setState({
        points: points + 1,
        answer: true
      })
    } else {
      this.setState({
        answer: false
      })
    }
  };

  handleClick = (answer) => {
    const { step } = this.state;
    const listAnswers = Object.values(list);

    if(step < listAnswers.length) {
      this.handleAnswer(answer, step, listAnswers);

      this.setState({
        step: step + 1
      });
    } 
  };

  render() {
    const { userStartedInteractions, answer } = this.state;

    return (
      <div className="app">
        <h1 className='gameHeading'>True or false game</h1>
        <ElementsList list={list} step={this.state.step} />
          <GameAlert isTouched={userStartedInteractions} answer={answer} />
        <div className='buttonsWrapper'>
          <Button buttonType={true} handleClick={this.handleClick} />
          <Button buttonType={false} handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
