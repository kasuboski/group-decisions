import React from 'react';

const style = {
    listStyle: 'none',
};

const ChoiceList = props => (
  <ul style={style}>
    {
        props.items.map((item, index) => <li key={index}>{item}</li>)
    }
  </ul>
);

export default ChoiceList;
