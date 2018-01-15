import {
    joinRoom as joinRoomApi,
} from '../api';

function joinRoomState(room, member, isCreator) {
    return { type: 'JOIN_ROOM', room, member, isCreator };
}

export function joinRoom(room, name, isCreator) {
    return (dispatch, getState) => {
        const user = getState().authState.user;
        const uid = user ? user.uid : '';
        const member = {
            uid,
            name,
        };
        joinRoomApi(room, member, isCreator);
        dispatch( joinRoomState(room, member, isCreator) );
    }
}