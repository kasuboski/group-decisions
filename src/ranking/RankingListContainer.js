import { connect } from 'react-redux';

import { getChoices } from 'choices/choicesSelectors';
import { choicesReordered } from 'choices/choicesActions';
import { doneRanking } from 'ranking/rankingActions';

import RankingList from './RankingList';

const mapStateToProps = (state) => {
  return {
    items: getChoices(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChoicesReordered: (choices) => { dispatch( choicesReordered(choices) ) },
    onDoneRanking: () => { dispatch( doneRanking() ) },
  };
};

const RankingListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RankingList);

export default RankingListContainer;
