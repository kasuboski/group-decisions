import React from 'react';

import { connect } from 'react-redux';

import { subscribeToMembers } from 'api';
import { allJoined, allJoinedUpdate } from 'join/joinActions';
import { getRoom, isCreator } from 'auth/authSelectors';

import Waiting from 'components/Waiting';
import { subscribeToAllJoined } from '../api';

class WaitingToJoin extends React.Component {
  render() {
    return (
      <div>
        <Waiting items={this.props.members || []} showStatus={false} />
        {this.props.isCreator && <button onClick={this.props.handleAllJoined}>All joined</button>}
      </div>
    );
  }
}

class WaitingToJoinListener extends React.Component {
  state = {
    data: null,
  }

  unsubscribeMembers = null;
  unsubscribeAllJoined = null;

  updateMembers = (members) => {
    this.setState({data: members});
  }

  componentDidMount() {
    this.unsubscribeMembers = subscribeToMembers(this.props.room, this.updateMembers);
    this.unsubscribeAllJoined = subscribeToAllJoined(this.props.room, this.props.updateAllJoined);
  }

  componentWillUnmount() {
    this.unsubscribeMembers();
    this.unsubscribeAllJoined();
  }

  render() {
    return (
      <WaitingToJoin {...this.props} members={this.state.data} />
    );
  }
}

const mapStateToProps = (state) => ({
  room: getRoom(state),
  isCreator: isCreator(state),
});

const mapDispatchToProps = dispatch => ({
  handleAllJoined: () => dispatch(allJoined()),
  updateAllJoined: (allJoined) => dispatch(allJoinedUpdate(allJoined)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WaitingToJoinListener);

