import React from 'react';
import '../Home/css/jumbotron.css';
import Welcome from "../Home/welcome";
import Intro from "../Home/intro";
import PlantsHeader from "./plantsHeader";
import PlantsBody from "./plantsBody";
import Jumbotron2 from "../Home/jumbotron2";

class About extends React.Component {

render(){
    return(
        <div className="row top" id="about">
      <div id="intro-container" className="item-container">
        <Jumbotron2/>
        <Welcome />
        <Intro />
      </div>
      <div id="container-two">
        <PlantsHeader />
        <PlantsBody />
      </div>
      </div>
    )
}
}

export default About