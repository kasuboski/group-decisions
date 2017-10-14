import { connect } from 'react-redux';
import { choicesReordered, startOver, quit } from '../actions';

import Result from './Result';

const mapStateToProps = (state) => {
  return {
    result: state.choices ? state.choices[0] : [],
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onChoicesReordered: (choices) => { dispatch( choicesReordered(choices) ) },
    onStartOver: () => { props.history.push('/choices'); dispatch( startOver()) },
    onQuit: () => { props.history.push('/'); dispatch( quit() ) },
  };
};

const ResultContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);

export default ResultContainer;
