import React, { Component } from 'react';

import ElementsList from '../ElementsList/ElementsList';

import './_app.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className='gameHeading'>True or false game</h1>
        <ElementsList />
        <p className='gameAlert isCorrect isWrong'>
          Your answer was correct
        </p>
        <div className='buttonsWrapper'>
          <button className='gameButton isTrue isFalse'>
            True
          </button>
          <button className='gameButton isTrue isFalse'>
            False
          </button>
        </div>
      </div>
    );
  }
}

export default App;
