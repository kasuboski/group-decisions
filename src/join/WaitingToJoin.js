import React from 'react';

import { connect } from 'react-redux';

import Waiting from '../components/Waiting';

class WaitingToJoin extends React.Component {
  render() {
    return (
      <div>
        <Waiting items={this.props.names} showStatus={false} />
        <button>All joined</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.infoState.otherPlayers,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WaitingToJoin);

