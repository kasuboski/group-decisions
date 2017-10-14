import React, { Component } from 'react';

import ChoiceList from '../components/ChoiceList';

export default class Choices extends Component {

    state = {
        term: ''
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

                <button
                    type="button"
                    onClick={this.props.onRankChoices}
                >
                    Rank the choices
                </button>
            </div>
        );
    }
}
