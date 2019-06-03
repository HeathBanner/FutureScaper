import React, { Component } from 'react';
import update from 'immutability-helper';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Example from '../../components/DnD/Example';
import Jumbotron from '../../components/Home/jumbotron';
import Welcome from '../../components/Home/welcome';
import Intro from '../../components/Home/intro';
import PlantsHeader from '../../components/Home/plantsHeader';
import PlantsBody from '../../components/Home/plantsBody';

class HomePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      cards: [
        {
          id: 1,
          text: 'Write a cool JS library',
        },
        {
          id: 2,
          text: 'Make it generic enough',
        },
        {
          id: 3,
          text: 'Write README',
        },
        {
          id: 4,
          text: 'Create some examples',
        },
        {
          id: 5,
          text:
            'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
        },
        {
          id: 6,
          text: '???',
        },
        {
          id: 7,
          text: 'PROFIT',
        },
      ],
    }
  }

  deleteItem = (id) => {
      this.setState(state => {
        return {
          items: state.items.filter(item => item.id !== id)
        }
      })
    }

  moveCard = (dragIndex, hoverIndex) => {
      const { cards } = this.state
      const dragCard = cards[dragIndex]

      this.setState(
        update(this.state, {
          cards: {
            $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
          },
        }),
      )
    }

  render() {

        return (
          <div className="row">
                <Example />
              <div className="row">
                <Jumbotron />
              </div>
                    
              <div id="intro-container" className="item-container">
                <Welcome />
                <Intro />
              </div>
              <div id="container-two">
                <PlantsHeader />
                <PlantsBody />
              </div>
              </div>
        )
  }
}

export default DragDropContext(HTML5Backend)(HomePage);
