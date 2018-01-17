import {
    addChoice as addChoiceApi,
} from 'api';

import { getRoom } from 'auth/authSelectors';

export function addChoiceState(choice) {
    return { type: 'ADD_CHOICE', choice };
}

export function addChoice(choice) {
    return (dispatch, getState) => {
        const room = getRoom(getState());
        addChoiceApi(room, choice);
        dispatch( addChoiceState(choice) );
    };
}

export function choicesReordered(choices) {
    return { type: 'CHOICES_REORDERED', choices };
}