import React, { useState, useCallback } from 'react'
import Container from './Container'

import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

const DragAroundNaive = () => {
  const hideSourceOnDrag = useState(true)
  return (
    <div className="row DnD">
      <Container hideSourceOnDrag={hideSourceOnDrag} />
    </div>
  )
}
export default DragDropContext(HTML5Backend)(DragAroundNaive);