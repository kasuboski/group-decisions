import { rankChoices } from "api";

import { getRoom, getUser } from 'auth/authSelectors';
import { getChoices } from 'choices/choicesSelectors';

const doneRankingState = () => ({type: 'DONE_RANKING'});

const doneRanking = () => {
    return async (dispatch, getState) => {
        dispatch( doneRankingState() );
        const room = getRoom(getState());
        const uid = getUser(getState()).uid;
        // TODO: see if can read from rankedChoices
        const rankedChoices = getChoices(getState());

        await rankChoices(room, uid, rankedChoices);
    };
};

export {
    doneRanking,
};