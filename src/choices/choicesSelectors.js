const getChoicesState = state => state.choicesState;
const getChoices = state => getChoicesState(state).choices;
const getMembers = state => getChoicesState(state).members;

export {
    getChoices,
    getMembers,
};