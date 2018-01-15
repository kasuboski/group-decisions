import React from 'react';

import { connect } from 'react-redux';

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
  }

  render() {
    return (
      <WaitingToJoin {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  players: [],
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WaitingToJoinListener);

