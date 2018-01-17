import { push } from 'react-router-redux';

import {
    addChoice as addChoiceApi,
    markMemberReady,
} from 'api';

import { getRoom, getUser } from 'auth/authSelectors';

export function addChoices(choices) {
    return { type: 'ADD_CHOICES', choices };
}

export function addChoice(choice) {
    return async (dispatch, getState) => {
        const room = getRoom(getState());
        const uid = getUser(getState()).uid;
        await addChoiceApi(room, uid, choice);
    };
}

export function doneWithChoices() {
    return async (dispatch, getState) => {
        const room = getRoom(getState());
        const uid = getUser(getState()).uid;

        await markMemberReady(room, uid, true);
        dispatch( push('/waitForChoices') );
    }
}

const membersUpdated = members => ({type: 'MEMBERS_UPDATED', members});
const areAllMembersReady = (members) => members.filter(member => member.ready).length === members.length;

export function updateMembers(members) {
    return dispatch => {
        dispatch( membersUpdated(members) );
        if (areAllMembersReady(members)) {
            dispatch( push('/rank') );
        }
    }
}

export function choicesReordered(choices) {
    return { type: 'CHOICES_REORDERED', choices };
}