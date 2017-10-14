import { connect } from 'react-redux';
import { joinRoom } from '../actions';

import Join from './Join';

const mapDispatchToProps = (dispatch, props) => ({
    joinRoomClicked: (room) => { props.history.push('/choices'); dispatch( joinRoom(room) ); },
});

export default connect(null, mapDispatchToProps)(Join);