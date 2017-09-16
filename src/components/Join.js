import React from 'react';

export default class Join extends React.Component {
    
        state = {
            room: ''
        }
    
        onChange = (event) => {
            this.setState({ room: event.target.value });
        }
    
        onSubmit = (event) => {
            event.preventDefault();

            this.props.joinRoomClicked(this.state.room);
            this.setState({
                room: ''
            });
        }
    
        render() {
            return (
                <div>
                    <form onSubmit={this.onSubmit}>
                        <input value={this.state.room} onChange={this.onChange} />
                        <button>Join Room</button>
                    </form>
                </div>
            );
        }
    }