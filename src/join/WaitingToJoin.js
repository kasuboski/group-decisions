import React from 'react';

import { connect } from 'react-redux';

import { listenForReceiveJoinRoom } from '../api';

import Waiting from '../components/Waiting';

class WaitingToJoin extends React.Component {
  render() {
    return (
      <div>
        <Waiting items={this.props.players} showStatus={false} />
        <button>All joined</button>
      </div>
    );
  }
}

class WaitingToJoinListener extends React.Component {
  componentDidMount() {
    listenForReceiveJoinRoom((name) => {
      // dispatch action to add name
    });
  }

  render() {
    return (
      <WaitingToJoin {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.infoState.otherPlayers,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WaitingToJoinListener);

