import { connect } from 'react-redux';
import { addChoice } from '../actions';

import Choices from './Choices';

const mapStateToProps = (state) => {
  return {
    choices: state.choices
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddChoice: (choice) => { dispatch( addChoice(choice) ) },
  };
};

const ChoicesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Choices);

export default ChoicesContainer;
