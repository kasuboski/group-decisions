const getAuthState = state => state.authState;
const getUser = state => getAuthState(state).user;
const getRoom = state => getAuthState(state).room;
const isCreator = state => getAuthState(state).isCreator;

export {
    getUser,
    getRoom,
    isCreator,
};