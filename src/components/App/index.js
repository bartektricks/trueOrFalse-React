import React, { Component } from 'react';

/* Components */
import ElementsList from '../ElementsList';
import GameAlert from '../GameAlert';
import Button from '../Button';

/* External content */
import list from '../../vendors/ExternalList';

/* Styles */
import './_app.scss';

class App extends Component {

  state = {
    points: 0,
    step: 0,
    questions: [],
    answers: [],
    answer: ''
  }

  componentDidMount() {
    const listItems = Object.keys(list);
    const listAnswers = Object.values(list);

    this.setState({
      questions: [ ...listItems ],
      answers: [ ...listAnswers ],
    });
  }

  handleAnswer = (answer, step) => {

    const { answers, points } = this.state;

    if(answers[step] === answer) {
      this.setState({
        points: points + 1,
        answer: 'correct'
      })
    } else {
      this.setState({
        answer: 'wrong'
      })
    }
  }

  handleClick = (answer) => {

    const { step, questions } = this.state;

    this.handleAnswer(answer, step);

    if(step < questions.length) {
      this.setState({
        step: step + 1
      });
    } 
  }

  render() {
    return (
      <div className="app">
        <h1 className='gameHeading'>True or false game</h1>
        <ElementsList step={this.state.step} />
        <GameAlert answer={this.state.answer} />
        <div className='buttonsWrapper'>
          <Button buttonType={true} handleClick={this.handleClick} />
          <Button buttonType={false} handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
