import React from "react";
import Hero from "../../components/Hero";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import bg from './images/bg.jpg';
import Logo from '../../components/Home/css/imgs/logo.png'
import Homeinfo from "../../components/Home/homeinfo";
import Welcome from '../../components/Home/welcome';
import Intro from '../../components/Home/intro';
import NavAbout from '../../components/NavAbout/NavAbout'

import Jumbotron from '../../components/Home/jumbotron';

import Footer from "../../components/Footer/Footer";


import PlantsHeader from '../../components/Home/plantsHeader';
import PlantsBody from '../../components/Home/plantsBody';


const About = () =>

  <div>
    <NavAbout></NavAbout>
        {/* <Example /> */}
      <div className="row">
        <Jumbotron />
      </div>
      <div className="row">
        {/* <Homeinfo /> */}
      </div>

      <div id="intro-container" className="item-container">
        <Welcome />
        <Intro />
      </div>
      <div id="container-two">
        <PlantsHeader />
        <PlantsBody />
      </div>
      <Footer />

      </div>



{/* <div>
    <Hero backgroundImage={bg}>
      <h1>FutureScaper</h1>
      <h2>Build a Greener Future</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
    
   <span data-tilt>
     <img className="logo" src={Logo} alt="logo"></img>
   </span>

      <Row>
        <Col size="md-12">
          <h1>Welcome To FutureScaper!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
            <div id="intro-container" className="item-container">
              <Welcome />
              <Intro />
            </div>
            <div id="container-two">
              <PlantsHeader />
              <PlantsBody />

            </div>
          <p>
            Etiam ut massa efficitur, gravida sapien non, condimentum sapien.
            Suspendisse massa tortor, facilisis in neque sit amet, scelerisque
            elementum tortor. Nullam eget nibh sit amet odio lobortis
            ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis. Mauris
            et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non
            mattis enim congue at. Proin mi lectus, ullamcorper id hendrerit eu,
            ultricies vitae lacus. Nunc vehicula, erat eget laoreet condimentum,
            felis ante malesuada leo, nec efficitur diam nisi eget nisi. Cras
            arcu lacus, tristique in bibendum vitae, elementum eget lorem.
            Maecenas vestibulum volutpat orci eu pharetra. Praesent vel blandit
            ante, nec faucibus libero. Sed ultrices lorem ex, eu facilisis
            libero convallis ac. Vivamus id dapibus eros. Nullam tempor sem
            rhoncus porta semper. Proin bibendum vulputate nisl, fringilla
            interdum elit pulvinar eu. Quisque vitae quam dapibus, vestibulum
            mauris quis, laoreet massa.
          </p>
        </Col>
      </Row>
    </Container>
  </div>; */}
      


export default About;
