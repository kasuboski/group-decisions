import React, { Component } from 'react';
import './App.css';
import Choices from './Choices'
import DraggableList from './DraggableList'

class App extends Component {
  render() {
    return (
        <div className="App">
            <Choices />
            <DraggableList />
        </div>
    );
  }
}

export default App;
