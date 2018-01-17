import React, { Component } from 'react';
import { Provider } from 'react-redux';

import {
  Route
} from 'react-router-dom';

import { ConnectedRouter } from 'react-router-redux';

import store, { history } from 'store/createStore';

import './App.css';
import Auth from 'auth/Auth';
import JoinContainer from 'join/JoinContainer';
import WaitingToJoin from 'join/WaitingToJoin';
import ChoicesContainer from 'choices/ChoicesContainer';
import WaitForChoices from 'choices/WaitForChoices';
import RankingListContainer from 'ranking/RankingListContainer';
import ResultContainer from 'result/ResultContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <Auth />
            <Route exact path="/" component={JoinContainer} />
            <Route path='/waitToJoin' component={WaitingToJoin} />
            <Route path="/choices" component={ChoicesContainer} />
            <Route path="/waitForChoices" component={WaitForChoices} />
            <Route path="/rank" component={RankingListContainer} />
            <Route path="/result" component={ResultContainer} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;