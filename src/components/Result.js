import React from 'react';

const Result = props => (
    <div>
        <h1>The result is {props.result}</h1>
        <button
            type="button"
            onClick={props.onStartOver}
          >
            Start Over
          </button>
          <button
            type="button"
            onClick={props.onQuit}
          >
            Quit
          </button>
    </div>
);

export default Result;
