import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';

import authReducer from 'auth/authReducer';
import choicesReducer from 'choices/choicesReducer';

const rootReducer = combineReducers({
    authState: authReducer,
    choicesState: choicesReducer,
    form: formReducer,
});

export default rootReducer;