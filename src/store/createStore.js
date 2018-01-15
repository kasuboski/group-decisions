import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === `development`) {
    const { createLogger } = require(`redux-logger`);
    const logger = createLogger({
      predicate: (getState, action) => !action.type.startsWith('@@redux-form'),
    });
  
    middlewares.push(logger);
  }

export default createStore(rootReducer, applyMiddleware(...middlewares));