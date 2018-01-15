const initialState = {
    user: null,
};

export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case 'AUTH_CHANGED':
            return { user: action.user };
        default:
            return state;
    }
}