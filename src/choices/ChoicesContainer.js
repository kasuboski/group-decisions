import { connect } from 'react-redux';
import { addChoice, addChoiceState } from './choicesActions';

import Choices from './Choices';

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
)(Choices);

export default ChoicesContainer;
