import React, { Component } from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Card from './Card';

class RankingList extends Component {
  constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
    this.state = {
      cards: this.mapItems(props.items),
    };
  }

  mapItems = (items) => {
      return items.map((item, i) => {
          return {id: i, text: item};
      });
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
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(RankingList);
