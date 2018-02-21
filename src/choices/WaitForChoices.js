import React from 'react';
import { connect } from 'react-redux';

import { getRoom } from 'auth/authSelectors';
import { subscribeToMembers } from 'api';
import { updateMembers } from 'choices/choicesActions';
import { getMembers } from 'choices/choicesSelectors';

import Waiting from 'components/Waiting';

const WaitForChoices = (props) => (
    <Waiting items={props.members || []} showStatus={true} />
);

class WaitForChoicesListener extends React.Component {
    unsubscribe = null;

    componentDidMount() {
        this.unsubscribe = subscribeToMembers(this.props.room, this.props.onMembersUpdated);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <WaitForChoices {...this.props} members={this.props.members} />
        );
    }
}

const mapStateToProps = (state) => ({
    room: getRoom(state),
    members: getMembers(state),
});

const mapDispatchToProps = (dispatch) => ({
    onMembersUpdated: (members) => dispatch( updateMembers(members) ),
});

export default connect(mapStateToProps, mapDispatchToProps)(WaitForChoicesListener);