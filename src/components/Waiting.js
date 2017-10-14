import React from 'react';

import List from './List';
import NameStatus from './NameStatus';

const Waiting = props => {
  const itemComponent = (item) => {
    return props.showStatus ? (<NameStatus name={item.name} status={item.status} />) : (item.name)
  };
  return (
    <div>
      <h2>Waiting...</h2>
      <List
        items={props.items}
        renderItem={itemComponent}
      />
    </div>
  )
};

export default Waiting;