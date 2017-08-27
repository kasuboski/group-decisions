import { connect } from 'react-redux';
import { addChoice } from '../actions';

import RankingList from './RankingList';

const mapStateToProps = (state) => {
  return {
    items: state.choices
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddChoice: (choice) => { dispatch( addChoice(choice) ) },
  };
};

const RankingListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RankingList);

export default RankingListContainer;
