import React from 'react';

const ChoiceList = props => (
  <ul>
    {
        props.items.map((item, index) => <li key={index}>{item}</li>)
    }
  </ul>
);

export default ChoiceList;
