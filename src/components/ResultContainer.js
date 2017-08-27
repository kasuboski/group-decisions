import { connect } from 'react-redux';
import { choicesReordered } from '../actions';

import Result from './Result';

const mapStateToProps = (state) => {
  return {
    result: state.choices[0]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChoicesReordered: (choices) => { dispatch( choicesReordered(choices) ) },
  };
};

const ResultContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);

export default ResultContainer;
