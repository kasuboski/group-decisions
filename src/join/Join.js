import React from 'react';
import { SubmissionError } from 'redux-form';

import { doesRoomExist } from 'api';

import JoinForm from './JoinForm';

class Join extends React.Component {
    submit = (values) => {
        const { room, name, isCreator } = values;
        return doesRoomExist(room).then(roomExists => {
            if (isCreator) {
                if (roomExists) {
                    throw new SubmissionError({
                        room: 'Room already exists',
                        _error: "Couldn't create room",
                    });
                }
            } else {
                if (!roomExists) {
                    throw new SubmissionError({
                        room: "Room doesn't exist",
                        _error: "Couldn't join room",
                    });
                }
            }

            this.props.joinRoomClicked(room, name, isCreator);
        });
    }

    render() {
        return (
            <div>
                <JoinForm onSubmit={this.submit} />
            </div>
        );
    }
}

export default Join;