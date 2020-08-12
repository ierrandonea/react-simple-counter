import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import '@fortawesome/fontawesome-free/css/all.min.css';


let counter = 0;
setInterval(() => {
  let sixDigits = Math.floor(counter/100000);
  let fiveDigits = Math.floor(counter/10000);
  let fourDigits = Math.floor(counter/1000);
  let threeDigits = Math.floor(counter/100);
  let twoDigits = Math.floor(counter/10);
  let oneDigit = counter;
  counter ++;

ReactDOM.render(
  <React.StrictMode>
    <App
    x1={oneDigit}
    x10={twoDigits}
    x100={threeDigits}
    x1000={fourDigits}
    x10000={fiveDigits}
    x100000={sixDigits}
     />
  </React.StrictMode>,
  document.getElementById('root')
);
}, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
