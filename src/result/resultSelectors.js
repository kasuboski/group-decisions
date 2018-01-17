const getResultState = state => state.resultState;
const getResult = state => getResultState(state).result;

export {
    getResult,
};