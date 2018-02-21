import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';

import { routerReducer } from 'react-router-redux'

import authReducer from 'auth/authReducer';
import choicesReducer from 'choices/choicesReducer';
import resultReducer from 'result/resultReducer';

const rootReducer = combineReducers({
    authState: authReducer,
    choicesState: choicesReducer,
    resultState: resultReducer,
    form: formReducer,
    router: routerReducer,
});

export default rootReducer;