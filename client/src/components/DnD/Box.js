import React from 'react'
import { DragSource } from 'react-dnd'
import ItemTypes from './ItemTypes'
import { findDOMNode } from 'react-dom';

const style = {
  position: 'absolute',
  borderRadius: '50%',
  backgroundColor: 'rgb(239, 255, 226)',
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
  plant,
  seasonStyle
}) => {
  if (isDragging && hideSourceOnDrag) {
    return null
  }
  return connectDragSource(
      <div style={Object.assign({}, style, { left, top }, seasonStyle )} plant onClick={onClick} origin={isOrigin} >{children}
      </div>  
  )
}
export default DragSource(
  ItemTypes.BOX,
  {
    beginDrag(props) {
      const { id, left, top, index, onClick, isOrigin, plant, seasonStyle } = props
      return { id, left, top, index, onClick, isOrigin, plant, seasonStyle  }
    },
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }),
)(Box)
