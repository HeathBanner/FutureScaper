import React from 'react'
import { DropTarget } from 'react-dnd'
import ItemTypes from './ItemTypes'
import Box from './Box'
import update from 'immutability-helper'

import results from './1000'

const styles = {
  width: "100%",
  height: "80vh",
  border: '1px solid black',
  position: 'relative',
}
class Container extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      error: null,
      isLoaded: false,
      items: results,
      boxes: [],
    }
  }

  populateResults() {
              const plants = this.state.items.map((plant, index) => {
            return (
              plant.top = index * 60,
              plant.left = 0,
              plant.index = index,
              plant
            )
            
          })
          this.setState({
            boxes: plants
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
        <div className="container">
          <div className="row">
            <div className="col-lg-10" style={styles}></div>
            <div className="col-lg-2">
              {this.state.boxes.map(object => {
                console.log(object)
                const { left, top, common_name, id } = object
                return (
                  <Box
                    key={id}
                    index={object.index}
                    id={id}
                    left={left}
                    top={top}
                    hideSourceOnDrag={hideSourceOnDrag}
                  >
                    {common_name}
                  </Box>
                )
              })}
            </div>
          </div>
        </div>
      )
  }
  moveBox(id, left, top, index) {
    console.log(left)
    console.log(top)
    console.log(index)
    this.setState(
      update(this.state, 
        {boxes: {
          [index]: {
              $merge: { left, top }
            }
          }
        }  
      )
    )
    console.log(this.state.boxes[index])
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
      const left = Math.round(item.left + delta.x)
      const top = Math.round(item.top + delta.y)
      console.log(item)
      component.moveBox(item.id, left, top, item.index)
    },
  },
  connect => ({
    connectDropTarget: connect.dropTarget(),
  }),
)(Container)
