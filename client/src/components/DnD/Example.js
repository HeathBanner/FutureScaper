import React, { useState, Fragment } from 'react'
import Container from './Container'



const DragAroundNaive = () => {
  
  const hideSourceOnDrag = useState(true)
  
  return (

    <Fragment>

      <Container hideSourceOnDrag={hideSourceOnDrag} />

    </Fragment>
    
  );
};

export default DragAroundNaive;