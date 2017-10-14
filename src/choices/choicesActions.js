import {
    sendChoice,
} from '../api';

export function addChoiceState(choice) {
    return { type: 'ADD_CHOICE', choice };
}

export function addChoice(choice) {
    return (dispatch, getState) => {
        const room = getState().infoState.room;
        sendChoice(room, choice);
        dispatch( addChoiceState(choice) );
    };
}

export function choicesReordered(choices) {
    return { type: 'CHOICES_REORDERED', choices };
}