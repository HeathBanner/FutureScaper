import React, { Component } from 'react';
import Example from "../../components/DnD/Example"
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";


class PlotPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    }
  }

  render() {

        return (
          <div>
                <Example />
          </div> 
        )
  }
}

export default DragDropContext(HTML5Backend)(PlotPage);
