export function addChoice(choice) {
    return { type: 'ADD_CHOICE', choice };
}

export function choicesReordered(choices) {
    return { type: 'CHOICES_REORDERED', choices };
}

export function startOver() {
    return { type: 'START_OVER' };
}
