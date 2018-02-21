import {
    getResult as getResultApi,
    leaveRoom as leaveRoomApi,
} from 'api';

import { getRoom } from 'auth/authSelectors';
import { getChoices } from 'choices/choicesSelectors';

const receivedResult = result => ({ type: 'RECEIVED_RESULT', result });

const getResult = () => {
    return async (dispatch, getState) => {
        const room = getRoom(getState());
        const choices = getChoices(getState());

        const result = await getResultApi(room, choices);
        dispatch( receivedResult(result) );
    };
};

function startOver() {
    return { type: 'START_OVER' };
}

function leaveRoom(room) {
    return dispatch => {
        leaveRoomApi(room);
    }
}

function quit() {
    return (dispatch, getState) => {
        dispatch( leaveRoom('FIXME') );
        dispatch( startOver() );
    }
}

export {
    getResult,
    startOver,
    quit,
};