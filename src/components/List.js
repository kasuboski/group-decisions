import React from 'react';

const style = {
  listStyle: 'none',
};

const List = props => (
  <ul style={style}>
    {
      props.items.map((item, index) => <li key={index}>{props.renderItem(item)}</li>)
    }
  </ul>
);

export default List;
