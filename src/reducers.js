const initialState = {
    room: '',
    choices: [],
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case 'JOIN_ROOM':
            return {...state, ...{ room: action.room }};
        case 'ADD_CHOICE':
            const choices = [...state.choices, action.choice];
            return {...state, ...{ choices: choices } };
        case 'CHOICES_REORDERED':
            return {...state, ...{ choices: action.choices } };
        case 'START_OVER':
            return {...state, ...{ choices: [] } };
        default:
            return state;
    }
}
