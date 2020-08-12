import React from 'react';
import PropTypes from "prop-types";
import './App.css';

function App(props) {
  return (
    <div className="App">
      <div className="Counter">
            <div className="seconds">
                <h1><i class="fas fa-stopwatch"></i></h1>
                <h2>{props.x1}</h2>
                <h2>{props.x10}</h2>
                <h2>{props.x100}</h2>
                <h2>{props.x1000}</h2>
                <h2>{props.x10000}</h2>
                <h2>{props.x100000}</h2>
            </div>
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
