import React from 'react'
import { DragSource } from 'react-dnd'
import ItemTypes from './ItemTypes'
import { findDOMNode } from 'react-dom';

const style = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
}
const Box = ({
  hideSourceOnDrag,
  left,
  top,
  connectDragSource,
  isDragging,
  children,
  onClick,
  isOrigin,
}) => {
  if (isDragging && hideSourceOnDrag) {
    return null
  }
  return connectDragSource(
      <div style={Object.assign({}, style, { left, top },  )} onClick={onClick} origin={isOrigin} >{children}
      </div>  
  )
}
export default DragSource(
  ItemTypes.BOX,
  {
    beginDrag(props) {
      const { id, left, top, index, onClick, isOrigin } = props
      return { id, left, top, index, onClick, isOrigin  }
    },
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }),
)(Box)
