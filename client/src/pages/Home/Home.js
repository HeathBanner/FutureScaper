import React, { Component } from 'react';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Item from '../../components/DnD/Item';
import Target from '../../components/DnD/Target';
import Card from '../../components/DnD/Card';
import update from 'immutability-helper';

import Example from '../../components/DnD/Example';
import { DragDropContextProvider } from 'react-dnd';


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


  // componentDidMount() {
  //   fetch('/api/plants/getPlants')
  //     .then(res => res.json())
  //     .then((result) => {
  //       this.setState({
  //         isLoaded: true,
  //         items: result
  //       });
  //     },
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     );
  // }

  // const Types = {
  //   BOX: 'box',
  // };
  render() {

    const { error, isLoaded, items } = this.state;
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
    //   const list = items.map(item => {
    //     return <Item key={item.id} item={item.slug} handleDrop={() => this.deleteItem(item.id)} />
    //   });
    // }
        return (
          <div className='Home'>
                <div className="App">
                  <div className="App-intro">
                    <div className="app-container">
                    </div>
                    <div className="card-container">
                      <Example />
                      <Target />
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
