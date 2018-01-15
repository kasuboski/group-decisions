import {
    joinRoom as joinRoomApi,
} from '../api';

function joinRoomState(room, name, isCreator) {
    return { type: 'JOIN_ROOM', room, name };
}

export function joinRoom(room, name, isCreator) {
    return dispatch => {
        joinRoomApi(room, name, isCreator);
        dispatch( joinRoomState(room, name, isCreator) );
    }
}