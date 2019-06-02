import React, { useState, useCallback } from 'react'
import Container from './Container'
const DragAroundNaive = () => {
  const hideSourceOnDrag = useState(true)
  return (
    <div className="row">
      <Container hideSourceOnDrag={hideSourceOnDrag} />
    </div>
  )
}
export default DragAroundNaive
