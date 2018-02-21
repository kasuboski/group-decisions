import { connect } from 'react-redux';

import { joinRoom } from './joinActions';

import Join from './Join';

const mapDispatchToProps = (dispatch, props) => ({
    joinRoomClicked: (room, name, isCreator) => { 
        dispatch( joinRoom(room, name, isCreator) );
    },
});

export default connect(null, mapDispatchToProps)(Join);