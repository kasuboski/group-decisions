const initialState = {
    choices: []
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_CHOICE':
            const choices = [...state.choices, action.choice];
            return {...state, ...{ choices: choices } };
        case 'CHOICES_REORDERED':
            return {...state, ...{ choices: action.choices} };
        default:
            return state;
    }
}
