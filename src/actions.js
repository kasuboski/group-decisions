import {
    joinRoom as joinRoomApi,
    leaveRoom as leaveRoomApi,
    sendChoice,
} from './api';

function joinRoomState(room, name) {
    return { type: 'JOIN_ROOM', room, name };
}

export function joinRoom(room, name) {
    return dispatch => {
        joinRoomApi(room, name);
        dispatch( joinRoomState(room, name) );
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
