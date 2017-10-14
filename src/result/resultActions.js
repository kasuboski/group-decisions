import {
    leaveRoom as leaveRoomApi,
} from '../api';

export function startOver() {
    return { type: 'START_OVER' };
}

function leaveRoom(room) {
    return dispatch => {
        leaveRoomApi(room);
    }
}

export function quit() {
    return (dispatch, getState) => {
        dispatch( leaveRoom(getState().infoState.room) );
        dispatch( startOver() );
    }
}
