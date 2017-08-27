const initialState = {
    choices: []
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_CHOICE':
            const numChoices = state.choices.length;
            const newChoice = {id: numChoices, text: action.choice};
            const choices = [...state.choices, newChoice];
            return {...state, ...{ choices: choices } };
        case 'CHOICES_REORDERED':
            return {...state, ...{ choices: action.choices} };
        default:
            return state;
    }
}
