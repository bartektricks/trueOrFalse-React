import React from 'react';
import ReactDOM from 'react-dom';

import WebFont from 'webfontloader';
import './styles/styles.scss';
import App from './components/App';

import * as serviceWorker from './serviceWorker';

WebFont.load({
    google: {
      families: ['Montserrat:400,700', 'sans-serif']
    }
  });


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
