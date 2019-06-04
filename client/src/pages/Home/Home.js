import React, { Component } from 'react';
import update from 'immutability-helper';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Homeinfo from "../../components/Home/homeinfo";
import Example from '../../components/DnD/Example';
import Jumbotron from '../../components/Home/jumbotron';
import Footer from "../../components/Footer/Footer";

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
                {/* <Example /> */}
              <div className="row">
                <Jumbotron />
              </div>
              <div className="row">
                <Homeinfo />
              </div>

              <div id="intro-container" className="item-container">
                {/* <Welcome /> */}
                {/* <Intro /> */}
              </div>
              <div id="container-two">
                {/* <PlantsHeader />
                <PlantsBody /> */}
              </div>
              <Footer />
          </div>
              
        )
  }
}

export default DragDropContext(HTML5Backend)(HomePage);
