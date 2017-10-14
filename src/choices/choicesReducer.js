const initialState = {
    choices: [],
    rankedChoices: {},
}

export default function choicesReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_CHOICE':
            const choices = [...state.choices, action.choice];
            return {...state, ...{ choices: choices } };
        case 'CHOICES_REORDERED':
            return {...state, ...{ choices: action.choices } };
        case 'START_OVER':
            return initialState;
        default:
            return state;
    }
}