import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Homeinfo from "../../components/Home/homeinfo";
import Jumbotron from '../../components/Home/jumbotron';
import Footer from "../../components/Footer/Footer";
import Navigation from '../../components/Navigation/Navigation';

class HomePage extends Component {

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
                <Navigation></Navigation>

                {/* <Example /> */}
              <div className="row">
                <Jumbotron />
              </div>
              <div className="row">
                <Homeinfo />
              </div>
              <Footer />
          </div>
              
        )
  }
}

export default DragDropContext(HTML5Backend)(HomePage);
