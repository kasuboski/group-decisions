import {
    signIn,
    joinRoom as joinRoomApi,
} from '../api';

function joinRoomState(room, name) {
    return { type: 'JOIN_ROOM', room, name };
}

export function joinRoom(room, name) {
    return dispatch => {
        signIn();
        joinRoomApi(room, name);
        dispatch( joinRoomState(room, name) );
    }
}