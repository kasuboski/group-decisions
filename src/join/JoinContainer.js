import { connect } from 'react-redux';
import { joinRoom } from './joinActions';

import Join from './Join';

const mapDispatchToProps = (dispatch, props) => ({
    joinRoomClicked: (room, name) => { props.history.push('/choices'); dispatch( joinRoom(room, name) ); },
});

export default connect(null, mapDispatchToProps)(Join);