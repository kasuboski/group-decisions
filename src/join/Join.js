import React from 'react';

export default class Join extends React.Component {
    
        state = {
            room: '',
            name: '',
            isCreator: false,
        }
    
        onChange = (event) => {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
            this.setState({ [name]: value });
        }
    
        onSubmit = (event) => {
            event.preventDefault();

            this.props.joinRoomClicked(this.state.room, this.state.name, this.state.isCreator);
            this.setState({
                room: '',
                name: '',
                isCreator: false,
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
                        <label>Creator
                            <input name='isCreator' type='checkbox' checked={this.state.isCreator} onChange={this.onChange} />
                        </label>

                        <br />
                        <button>Join Room</button>
                    </form>
                </div>
            );
        }
    }