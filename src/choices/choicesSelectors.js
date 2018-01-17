const getChoicesState = state => state.choicesState;
const getChoices = state => getChoicesState(state).choices;

export {
    getChoices,
};