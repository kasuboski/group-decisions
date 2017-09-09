import { connect } from 'react-redux';
import { choicesReordered, startOver } from '../actions';

import Result from './Result';

const mapStateToProps = (state) => {
  return {
    result: state.choices[0]
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onChoicesReordered: (choices) => { dispatch( choicesReordered(choices) ) },
    onStartOver: () => { props.history.push('/'); dispatch( startOver()) },
  };
};

const ResultContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);

export default ResultContainer;
