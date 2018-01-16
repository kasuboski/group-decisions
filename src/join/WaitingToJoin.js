import React from 'react';

import { connect } from 'react-redux';

import { subscribeToMembers } from 'api';
import { getRoom, isCreator } from 'auth/authSelectors';

import Waiting from 'components/Waiting';

class WaitingToJoin extends React.Component {
  render() {
    return (
      <div>
        <Waiting items={this.props.members || []} showStatus={false} />
        {this.props.isCreator && <button>All joined</button>}
      </div>
    );
  }
}

class WaitingToJoinListener extends React.Component {
  state = {
    data: null,
  }

  unsubscribe = null;

  updateMembers = (members) => {
    console.log(members);
    this.setState({data: members});
  }

  componentDidMount() {
    this.unsubscribe = subscribeToMembers(this.props.room, this.updateMembers);
  }

  componentWillUnmount() {
    this.unsubscribe();
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

export default connect(mapStateToProps)(WaitingToJoinListener);

