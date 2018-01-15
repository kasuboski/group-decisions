import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import { Provider } from 'react-redux';

import store from 'store/createStore';

import './App.css';
import Auth from 'auth/Auth';
import JoinContainer from 'join/JoinContainer';
import WaitingToJoin from 'join/WaitingToJoin';
import ChoicesContainer from 'choices/ChoicesContainer';
import RankingListContainer from 'ranking/RankingListContainer';
import ResultContainer from 'result/ResultContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <Auth />
            <Route exact path="/" component={JoinContainer} />
            <Route path='/waitToJoin' component={WaitingToJoin} />
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