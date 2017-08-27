export function addChoice(choice) {
    return { type: 'ADD_CHOICE', choice };
}

export function choicesReordered(choices) {
    return { type: 'CHOICES_REORDERED', choices };
}
