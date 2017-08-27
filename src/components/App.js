import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from '../reducers'


import './App.css';
import ChoicesContainer from './ChoicesContainer'
import RankingListContainer from './RankingListContainer'
import ResultContainer from './ResultContainer'

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
        <Router>
            <Provider store={store}>
                <div className="App">
                    <Route exact path="/" component={ChoicesContainer} />
                    <Route path="/rank" component={RankingListContainer} />
                    <Route path="/result" component={ResultContainer} />
                </div>
            </Provider>
        </Router>
    );
  }
}

export default App;
