import {
    addChoice as addChoiceApi,
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

export function choicesReordered(choices) {
    return { type: 'CHOICES_REORDERED', choices };
}