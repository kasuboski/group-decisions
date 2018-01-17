const initialState = {
    choices: [],
    rankedChoices: {},
    members: [],
}

export default function choicesReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_CHOICES':
            return {...state, ...{ choices: action.choices } };
        case 'MEMBERS_UPDATED':
            return {...state, ...{ members: action.members } };
        case 'CHOICES_REORDERED':
            return {...state, ...{ choices: action.choices } };
        case 'DONE_RANKING':
            return {...state, ...{ rankedChoices: [...state.choices] } };
        case 'START_OVER':
            return initialState;
        default:
            return state;
    }
}