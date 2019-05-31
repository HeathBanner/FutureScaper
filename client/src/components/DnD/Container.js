import React from 'react'
import { DropTarget } from 'react-dnd'
import ItemTypes from './ItemTypes'
import Box from './Box'
import update from 'immutability-helper'
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
      boxes: [
        {a: {id: 'a', top: 0, left: 0, title: 'Drag me around' }},
        {b:{id: 'b',top: 60, left: 0, title: 'Drag me too' }},
        {c:{id: 'c', top:120, left: 0, title: 'Hello' }},

      ],
    }
  }
  render() {
    const { hideSourceOnDrag, connectDropTarget } = this.props
    const { boxes } = this.state
    return connectDropTarget(
        <div className="container">
          <div className="row">
            <div className="col-lg-10" style={styles}></div>
            <div className="col-lg-2">
              {this.state.boxes.map((object, index) => {
                console.log(index)
                const { left, top, title, id } = Object.entries(object)[0][1]
                return (
                  <Box
                    key={Object.keys(object)}
                    index={index}
                    id={Object.keys(object)}
                    left={left}
                    top={top}
                    hideSourceOnDrag={hideSourceOnDrag}
                  >
                    {title}
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
            [id]: {
              $merge: { left, top }
            }
          }}
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
      component.moveBox(item.id[0], left, top, item.index)
    },
  },
  connect => ({
    connectDropTarget: connect.dropTarget(),
  }),
)(Container)
