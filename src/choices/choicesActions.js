import { push, getLocation } from 'react-router-redux';

import {
    addChoice as addChoiceApi,
    getChoices as getChoicesApi,
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

function getChoices() {
    return async (dispatch, getState) => {
        const room = getRoom(getState());
        const choices = await getChoicesApi(room);
        dispatch( addChoices(choices) );
    };
}

const membersUpdated = members => ({type: 'MEMBERS_UPDATED', members});
const areAllMembersReady = (members) => members.filter(member => member.ready).length === members.length;

export function updateMembers(members) {
    return async (dispatch, getState) => {
        dispatch( membersUpdated(members) );
        if (areAllMembersReady(members)) {
            // update choices with final set
            dispatch( getChoices() );

            // move to next page
            const { pathname } = getLocation(getState());
            const nextRoute = pathname === '/waitForChoices' ? '/rank' : '/result';
            dispatch( push(nextRoute) );
            
            // reset members for next wait screen
            dispatch( membersUpdated([]) );

            const room = getRoom(getState());
            const uid = getUser(getState()).uid;
            await markMemberReady(room, uid, false);
        }
    }
}

export function choicesReordered(choices) {
    return { type: 'CHOICES_REORDERED', choices };
}