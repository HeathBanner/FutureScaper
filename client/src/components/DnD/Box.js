import React from 'react'
import { DragSource } from 'react-dnd'
import ItemTypes from './ItemTypes'
import { findDOMNode } from 'react-dom';

const style = {
  position: 'absolute',
  display: 'inline-block',
  borderRadius: '50%',
  padding: '0.5rem 1rem',
  cursor: 'move',
  width: '150px',
  margin: '0px 0px',
  textAlign: 'center'
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
      <div style={
        Object.assign({}, style, { left, top }, seasonStyle )
        } 
        plant = {plant}
        onClick={onClick} 
        origin={isOrigin}
        className="plant-dnd"
         > {children}
      </div>  
  )
}
export default DragSource(
  ItemTypes.BOX,
  {
    beginDrag(props) {
      console.log(props)
      const { id, left, top, index, onClick, isOrigin, plant, seasonStyle } = props
      return { id, left, top, index, onClick, isOrigin, plant, seasonStyle  }
    },
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }),
)(Box)
