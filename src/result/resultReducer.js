const initialState = {
    result: null,
};

export default function resultReducer(state = initialState, action) {
    switch(action.type) {
        case 'RECEIVED_RESULT':
            return { result: action.result };
        default:
            return state;
    }
}