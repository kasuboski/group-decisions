const initialState = {
    user: null,
    name: '',
    room: '',
    isCreator: false,
};

export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case 'AUTH_CHANGED':
            return { ...state, ...{ user: action.user } };
        case 'JOIN_ROOM':
            const { name } = action.member;
            return {...state, ...{ name, room: action.room, isCreator: action.isCreator } };
        default:
            return state;
    }
}