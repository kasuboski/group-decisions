import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ChoiceList from './ChoiceList';

export default class Choices extends Component {
    constructor(props) {
        super(props);
        this.state = {
          term: ''
        };
     }

    onChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();

        this.props.onAddChoice(this.state.term);
        this.setState({
            term: ''
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.term} onChange={this.onChange} />
                    <button>Add choice</button>
                </form>
                <ChoiceList items={this.props.choices} />
                <Link to="/rank">Rank the choices</Link>
            </div>
        );
    }
}
