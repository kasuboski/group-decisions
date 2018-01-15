import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
  
    middlewares.push(logger);
  }

export default createStore(rootReducer, applyMiddleware(...middlewares));