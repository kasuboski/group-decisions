import { push } from 'react-router-redux';

import {
    joinRoom as joinRoomApi,
    setAllJoined,
} from 'api';

import { getUser, getRoom } from 'auth/authSelectors';

function joinRoomState(room, member, isCreator) {
    return { type: 'JOIN_ROOM', room, member, isCreator };
}

export function joinRoom(room, name, isCreator) {
    return async (dispatch, getState) => {
        const user = getUser(getState());
        const uid = user ? user.uid : '';
        const member = {
            uid,
            name,
        };
        await joinRoomApi(room, member, isCreator);
        dispatch( joinRoomState(room, member, isCreator) );
        dispatch( push('/waitToJoin') );
    }
}

export function allJoinedUpdate(allJoined) {
    return dispatch => {
        if (allJoined) {
            dispatch( push('/choices') );
        }
    }
}

export function allJoined() {
    return async (dispatch, getState) => {
        await setAllJoined(getRoom(getState()));
        dispatch( push('/choices') );
    }
}