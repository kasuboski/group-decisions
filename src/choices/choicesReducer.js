const initialState = {
    choices: [],
    rankedChoices: {},
}

export default function choicesReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_CHOICES':
            return {...state, ...{ choices: action.choices } };
        case 'CHOICES_REORDERED':
            return {...state, ...{ choices: action.choices } };
        case 'START_OVER':
            return initialState;
        default:
            return state;
    }
}