import React, { Component } from 'react';

import List from '../components/List';

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
        <List
          items={this.props.choices}
          renderItem={(item) => item}
        />

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
