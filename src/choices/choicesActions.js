import {
    addChoice as addChoiceApi,
} from 'api';

import { getRoom } from 'auth/authSelectors';

export function addChoices(choices) {
    return { type: 'ADD_CHOICES', choices };
}

export function addChoice(choice) {
    return async (dispatch, getState) => {
        const room = getRoom(getState());
        await addChoiceApi(room, choice);
    };
}

export function choicesReordered(choices) {
    return { type: 'CHOICES_REORDERED', choices };
}