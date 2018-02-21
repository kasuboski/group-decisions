const getChoicesState = state => state.choicesState;
const getChoices = state => getChoicesState(state).choices;
const getChoice = (state, id) => getChoices(state).filter(choices => choices.id === id)[0];
const getMembers = state => getChoicesState(state).members;

export {
    getChoices,
    getChoice,
    getMembers,
};