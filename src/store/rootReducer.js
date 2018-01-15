import { combineReducers } from 'redux';

import authReducer from 'auth/authReducer';
import choicesReducer from 'choices/choicesReducer';

const rootReducer = combineReducers({
    authState: authReducer,
    choicesState: choicesReducer,
});

export default rootReducer;