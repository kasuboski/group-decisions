import React from 'react';

export default class Join extends React.Component {
    
        state = {
            room: '',
            name: '',
        }
    
        onChange = (event) => {
            this.setState({ [event.target.name]: event.target.value });
        }
    
        onSubmit = (event) => {
            event.preventDefault();

            this.props.joinRoomClicked(this.state.room, this.state.name);
            this.setState({
                room: '',
                name: '',
            });
        }
    
        render() {
            return (
                <div>
                    <form onSubmit={this.onSubmit}>
                        <label>Room
                            <input name='room' value={this.state.room} onChange={this.onChange} />
                        </label>

                        <br />
                        <label>Name
                            <input name='name' value={this.state.name} onChange={this.onChange} />
                        </label>

                        <br />
                        <button>Join Room</button>
                    </form>
                </div>
            );
        }
    }