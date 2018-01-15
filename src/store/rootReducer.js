import { combineReducers } from 'redux';

import authReducer from 'auth/authReducer';
import choicesReducer from 'choices/choicesReducer';
import infoReducer from 'infoReducer';

const rootReducer = combineReducers({
    authState: authReducer,
    infoState: infoReducer,
    choicesState: choicesReducer,
});

export default rootReducer;