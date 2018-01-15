const getAuthState = state => state.authState;
const getRoom = state => getAuthState(state).room;
const isCreator = state => getAuthState(state).isCreator;

export {
    getRoom,
    isCreator,
};