import React, { Component } from 'react';

import { connect } from 'react-redux';

import { listenForChoices } from 'api';
import { addChoice, addChoiceState } from './choicesActions';

import Choices from './Choices';

class ChoicesListener extends Component {
  componentDidMount() {
    listenForChoices((choice) => {
        this.props.onAddChoiceUpdate(choice);
    });
  }

  render() {
    return (
      <Choices {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    choices: state.choicesState.choices
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddChoice: (choice) => { dispatch( addChoice(choice) ) },
    onAddChoiceUpdate: (choice) => { dispatch( addChoiceState(choice) ) },
    onRankChoices: () => { props.history.push('/rank') },
  };
};

const ChoicesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChoicesListener);

export default ChoicesContainer;
