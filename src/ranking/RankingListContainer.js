import { connect } from 'react-redux';
import { choicesReordered } from '../choices/choicesActions';

import RankingList from './RankingList';

const mapStateToProps = (state) => {
  return {
    items: state.choicesState.choices
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChoicesReordered: (choices) => {
        dispatch( choicesReordered(choices) ) },
    };
};

const RankingListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RankingList);

export default RankingListContainer;
