import React, { useState, Fragment } from 'react';

import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import Example from "../../components/DnD/Example"

const PlotPage = () => {

  return (
    <Fragment>

      <Example />

    </Fragment>
  );
};

export default DragDropContext(HTML5Backend)(PlotPage);
