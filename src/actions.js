import {
    joinRoom as joinRoomApi,
    leaveRoom as leaveRoomApi,
    sendChoice,
} from './api';

function joinRoomState(room) {
    return { type: 'JOIN_ROOM', room };
}

export function joinRoom(room) {
    return dispatch => {
        joinRoomApi(room);
        dispatch( joinRoomState(room) );
    }
}

export function addChoiceState(choice) {
    return { type: 'ADD_CHOICE', choice };
}

export function addChoice(choice) {
    return (dispatch, getState) => {
        sendChoice(getState().room, choice);
        dispatch( addChoiceState(choice) );
    };
}

export function choicesReordered(choices) {
    return { type: 'CHOICES_REORDERED', choices };
}

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
        dispatch( leaveRoom(getState().room) );
        dispatch( startOver() );
    }
}
