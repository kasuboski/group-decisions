import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getRoom } from 'auth/authSelectors';
import { subscribeToChoices } from 'api';
import { getChoices } from 'choices/choicesSelectors';
import { addChoice, addChoices, doneWithChoices } from 'choices/choicesActions';

import Choices from './Choices';

class ChoicesListener extends Component {
  unsubscribe = null;

  componentDidMount() {
    this.unsubscribe = subscribeToChoices(this.props.room, (choices) => {
        this.props.onChoicesUpdate(choices);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <Choices {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    room: getRoom(state),
    choices: getChoices(state),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddChoice: (choice) => { dispatch( addChoice(choice) ) },
    onChoicesUpdate: (choices) => { dispatch( addChoices(choices) ) },
    onRankChoices: () => { dispatch( doneWithChoices() ) },
  };
};

const ChoicesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChoicesListener);

export default ChoicesContainer;
