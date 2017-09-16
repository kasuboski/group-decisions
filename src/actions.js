import {
    joinRoom as joinRoomApi,
    leaveRoom as leaveRoomApi,
} from './api';

export function addChoice(choice) {
    return { type: 'ADD_CHOICE', choice };
}

export function choicesReordered(choices) {
    return { type: 'CHOICES_REORDERED', choices };
}

export function startOver() {
    return { type: 'START_OVER' };
}

export function quit() {
    return (dispatch, getState) => {
        dispatch( leaveRoom(getState().room) );
        dispatch( startOver() );
    }
}

export function joinRoom(room) {
    return dispatch => {
        joinRoomApi(room);
        dispatch( joinRoomState(room) );
    }
}

function leaveRoom(room) {
    return dispatch => {
        leaveRoomApi(room);
    }
}

function joinRoomState(room) {
    return { type: 'JOIN_ROOM', room };
}
