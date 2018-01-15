import React from 'react';

import { doesRoomExist } from 'api';

import JoinForm from './JoinForm';

class Join extends React.Component {
    submit = (values) => {
        console.log(values);
        const { room, name, isCreator } = values;
        this.props.joinRoomClicked(room, name, isCreator);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <JoinForm onSubmit={this.submit} />
            </div>
        );
    }
}

export default Join;