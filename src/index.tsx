import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './components/hello';
const logo = require('./images/logo.png'); // ensure webpack loads the image

const startApp = () => {
  ReactDOM.render(<Hello />, document.getElementById('app'));
};

if(window["cordova"]) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}