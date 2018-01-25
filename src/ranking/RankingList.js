import React, { Component } from 'react';
import update from 'react/lib/update';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Card from 'components/Card';

class RankingList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: props.items,
    };
  }

  moveCard = (dragIndex, hoverIndex) => {
    const cards = this.props.items;
    const dragCard = cards[dragIndex];

    const newCards = update(cards, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, dragCard],
      ],
    });

    this.props.onChoicesReordered(newCards);
  }

  render() {
    const cards = this.props.items;

    return (
      <div>
        {cards.map((card, i) => (
          <Card
            key={card.id}
            index={i}
            id={card.id}
            text={card.name}
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
