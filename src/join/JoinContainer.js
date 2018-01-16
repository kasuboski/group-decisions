import React from 'react';
import { connect } from 'react-redux';

import { getRoom } from 'auth/authSelectors';
import { joinRoom } from './joinActions';

import Join from './Join';

class JoinNavigation extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.room) {
            nextProps.history.push('/waitToJoin');
        }
    }

    render() {
        return (
            <Join {...this.props} />
        )
    }
}

const mapStateToProps = state => ({
    room: getRoom(state),
});

const mapDispatchToProps = (dispatch, props) => ({
    joinRoomClicked: (room, name, isCreator) => { 
        dispatch( joinRoom(room, name, isCreator) );
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(JoinNavigation);