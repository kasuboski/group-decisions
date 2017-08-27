import React from 'react';
import { Link } from 'react-router-dom'

const Result = props => (
    <div>
        <h1>The result is {props.result}</h1>
        <Link to="/">Make another decision</Link>
    </div>
);

export default Result;
