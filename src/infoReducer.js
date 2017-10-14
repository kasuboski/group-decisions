const initialState = {
    room: '',
    name: '',
    otherPlayers: [], // {name, status}
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'JOIN_ROOM':
            return {...state, ...{ room: action.room, name: action.name }};
        default:
            return state;
    }
}
