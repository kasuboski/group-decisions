import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './rootReducer';

export const history = createHistory();
const middlewares = [thunkMiddleware, routerMiddleware(history)];

if (process.env.NODE_ENV === `development`) {
  const { createLogger } = require(`redux-logger`);
  const logger = createLogger({
    predicate: (getState, action) => !action.type.startsWith('@@redux-form'),
  });

  middlewares.push(logger);
}

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));