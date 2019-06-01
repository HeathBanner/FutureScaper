import React from 'react'
import ReactDOM from 'react-dom'
import { DropTarget } from 'react-dnd'
import { findDOMNode } from 'react-dom';
import ItemTypes from './ItemTypes'
import Box from './Box'
import update from 'immutability-helper'

import results from './1000'
import './CSS/container.css'

const plotCol = {
  width: "70vw",
  height: "100vh",
  border: '1px solid black',
  position: 'relative',
}

class Container extends React.Component {
  constructor() {
    super(...arguments)
    this.ref = React.createRef();
    this.state = {
      error: null,
      isLoaded: false,
      items: results,
      boxes: [],
      plotted: [],
    }
  }

  populateResults() {
              const plants = this.state.items.map((plant, index) => {
            return (
              plant.top = index * 60,
              plant.left = 0,
              plant.index = index,
              plant.moved = false,
              plant.isOrigin = true,
              plant
            )
            
          })
          this.setState({
            boxes: plants,
          })
  }

  componentDidMount() {
    this.populateResults();
  }

//   componentDidMount() {
//     fetch('/api/plants/getPlants')
//         .then(res => res.json())
//         .then((result) => {
//           console.log(items)
//             this.setState({
//                 isLoaded: true,
//                 items: items
//             });
//         },
//             (error) => {
//                 this.setState({
//                     isLoaded: true,
//                     error
//                 });
//             }
//         )
// }



  render() {

    const { hideSourceOnDrag, connectDropTarget } = this.props
    const { boxes } = this.state

    return connectDropTarget(
          <div className="row main-col">            
            <div id="portal" className="col-lg-10 plot-col" style={plotCol}>
            {this.state.plotted.map(object => {
            const { left, top, common_name, id, isOrigin, index } = object
            return (
              <Box   
                key={index}
                index={object.index}
                id={id}
                left={left}
                top={top}
                hideSourceOnDrag={hideSourceOnDrag}
                onClick={this.getElement}
                isOrigin={isOrigin}
              >
                {common_name}
              </Box>
            )
          })}

            </div>
            <div className="col-lg-2 item-col">
                {this.state.boxes.map(object => {
                  const { left, top, common_name, id, isOrigin } = object
                  return (
                    <Box
                    
                      key={id}
                      index={object.index}
                      id={id}
                      left={left}
                      top={top}
                      hideSourceOnDrag={hideSourceOnDrag}
                      onClick={this.getElement}
                      isOrigin='true'
                    >
                      {common_name}
                    </Box>
                  )
                })}

            </div>
          </div>
      )
  }
  moveBox(id, left, top, index, items) {
    if ((!this.state.boxes[items.index].moved) && (items.isOrigin)) {
      const plotted = this.state.boxes[index]
      let entries = []
      if (plotted) {
        entries = Object.entries(plotted)
        for (var i in entries) {
          let key = entries[i][0]
          key === 'top' ? items[key] = top: 
          key === 'left' ? items[key] = left:
          items[key] = entries[i][1]
        }
        items.moved = true;
        items.isOrigin = false;
        items.index = this.state.plotted.length
      }
        return (
          this.setState(
            update(this.state,
              {plotted: {
                  $push: [items]
                }
              }
              )
          )
        )
      
    } else if (!items.isOrigin) {
      this.setState(
        update(this.state,
          {plotted:
          {[items.index]:
            {$merge: { left, top }} 
          }} 
        )
      )
    }
  }
}
export default DropTarget(
  ItemTypes.BOX,
  {
    drop(props, monitor, component) {
      if (!component) {
        return
      }
      
      const item = monitor.getItem()
      const delta = monitor.getDifferenceFromInitialOffset()
      const leftOffset = monitor.getInitialSourceClientOffset().x - monitor.getInitialClientOffset().x
      const left = monitor.getClientOffset().x + leftOffset
      const topOffset = monitor.getInitialSourceClientOffset().y - monitor.getInitialClientOffset().y
      const top = monitor.getClientOffset().y + topOffset
      component.moveBox(item.id, left, top, item.index, item)
    },
  },
  connect => ({
    connectDropTarget: connect.dropTarget(),
  }),
)(Container)
