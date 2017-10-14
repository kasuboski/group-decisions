import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer } from '../reducers';


import './App.css';
import JoinContainer from '../join/JoinContainer';
import ChoicesContainer from '../choices/ChoicesContainer';
import RankingListContainer from '../ranking/RankingListContainer';
import ResultContainer from '../result/ResultContainer';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

class App extends Component {
  render() {
    return (
        <Router>
            <Provider store={store}>
                <div className="App">
                    <Route exact path="/" component={JoinContainer} />
                    <Route path="/choices" component={ChoicesContainer} />
                    <Route path="/rank" component={RankingListContainer} />
                    <Route path="/result" component={ResultContainer} />
                </div>
            </Provider>
        </Router>
    );
  }
}

export default App;
