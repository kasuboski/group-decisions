import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getRoom } from 'auth/authSelectors';
import { subscribeToChoices } from 'api';
import { addChoice, addChoices } from './choicesActions';

import Choices from './Choices';

class ChoicesListener extends Component {
  componentDidMount() {
    subscribeToChoices(this.props.room, (choices) => {
        this.props.onChoicesUpdate(choices);
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
    room: getRoom(state),
    choices: state.choicesState.choices,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddChoice: (choice) => { dispatch( addChoice(choice) ) },
    onChoicesUpdate: (choices) => { dispatch( addChoices(choices) ) },
    onRankChoices: () => { props.history.push('/rank') },
  };
};

const ChoicesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChoicesListener);

export default ChoicesContainer;
