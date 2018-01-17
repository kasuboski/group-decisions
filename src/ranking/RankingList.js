import React, { Component } from 'react';
import update from 'react/lib/update';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Card from '../components/Card';

class RankingList extends Component {
  constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
    this.state = {
      cards: props.items.map(this.mapItemToCard),
    };
  }

  mapItemToCard = (item, i) => {
    return {id: i, text: item.name};
  }

  moveCard(dragIndex, hoverIndex) {
    const { cards } = this.state;
    const dragCard = cards[dragIndex];

    this.setState(update(this.state, {
      cards: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      },
    }));

    this.props.onChoicesReordered(this.state.cards.map((card) => card.text));
  }

  render() {
    const { cards } = this.state;

    return (
      <div>
        {cards.map((card, i) => (
          <Card
            key={card.id}
            index={i}
            id={card.id}
            text={card.text}
            moveCard={this.moveCard}
          />
        ))}
        <button
          type="button"
          onClick={this.props.onDoneRanking}
        >
          Done Ranking
        </button>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(RankingList);
