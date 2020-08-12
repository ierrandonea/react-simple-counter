import React from 'react';
import PropTypes from "prop-types";
import './App.css';

function App(props) {
  return (
    <div className="App">
      <div className="Counter">
            <div className="seconds">
                <h1 className="clock"><i class="fas fa-stopwatch"></i></h1>
                <h2 className="10^5">{props.x100000 % 10}</h2>
                <h2 className="10^4">{props.x10000 % 10}</h2>
                <h2 className="10^3">{props.x1000 % 10}</h2>
                <h2 className="10^2">{props.x100 % 10}</h2>
                <h2 className="10">{props.x10 % 10}</h2>
                <h2 className="1">{props.x1 % 10}</h2>
            </div>
            <button className="buttons">STOP</button>
            <button className="buttons">RESUME</button>
            <button className="buttons">RESET</button>
        </div>
    </div>
  );
}

App.propTypes = {
  x1: PropTypes.string,
  x10: PropTypes.string,
  x100: PropTypes.string,
  x1000: PropTypes.string,
  x10000: PropTypes.string,
  x100000: PropTypes.string,
};

export default App;
