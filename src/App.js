import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';
import Choices from './Choices'
import DraggableList from './DraggableList'

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Route exact path="/" component={Choices} />
                <Route path="/rank" component={DraggableList} />
            </div>
        </Router>
    );
  }
}

export default App;
