import React, { Component } from 'react';

import { listenForChoices } from '../api';

import ChoiceList from './ChoiceList';

export default class Choices extends Component {

    componentDidMount() {
        listenForChoices((choice) => {
            this.props.onAddChoiceUpdate(choice);
        });
    }

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
