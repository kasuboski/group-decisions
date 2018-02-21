import React from 'react';
import { connect } from 'react-redux';

import { getResult as getResultAction, startOver, quit } from './resultActions';
import { getResult } from 'result/resultSelectors';
import { getChoice } from 'choices/choicesSelectors';

import Result from './Result';

class ResultContainer extends React.Component {
  componentDidMount() {
    this.props.onGetResult();
  }

  render() {
    return (
      <Result {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  const result = getResult(state);
  const resultChoice = result ? getChoice(state, result.choiceId).name : '';
  return {
    result: resultChoice,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onGetResult: () => { dispatch( getResultAction() ) },
    onStartOver: () => { props.history.push('/choices'); dispatch( startOver()) },
    onQuit: () => { props.history.push('/'); dispatch( quit() ) },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultContainer);
