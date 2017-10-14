import { connect } from 'react-redux';
import { startOver, quit } from './resultActions';
import { choicesReordered } from '../choices/choicesActions';

import Result from './Result';

const mapStateToProps = (state) => {
  return {
    result: state.choicesState.choices ? state.choicesState.choices[0] : [],
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
