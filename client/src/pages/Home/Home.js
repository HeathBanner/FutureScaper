import React, { Component } from 'react';
import update from 'immutability-helper';
import { DragDropContextProvider } from 'react-dnd';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Item from '../../components/DnD/Item';
import Target from '../../components/DnD/Target';
import Card from '../../components/DnD/Card';
import Example from '../../components/DnD/Example';
import Jumbotron from '../../components/Home/jumbotron';


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
          <div className='Home'>
                <div className="card-container">
                  <Example />
                </div>
                <div className="App">
                  <div className="App-intro">
                    <div className="row">
                      <Jumbotron />
                    </div>
                    
                  </div>
                </div>
              <div className="item-container">
                {/* {list} */}
              </div>
          </div>
        )
  }
}

export default DragDropContext(HTML5Backend)(HomePage);
