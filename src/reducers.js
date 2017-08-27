const initialState = {
    choices: []
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_CHOICE':
            const choices = [...state.choices, action.choice];
            return {...state, ...{ choices: choices } };
        default:
            return state;
    }
}
