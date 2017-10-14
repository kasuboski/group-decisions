import { combineReducers } from 'redux';

import choicesReducer from './choices/choicesReducer';
import infoReducer from './infoReducer';

const rootReducer = combineReducers({
    infoState: infoReducer,
    choicesState: choicesReducer,
});

export default rootReducer;