import React from 'react';

import Navigation from '../../components/Navigation/Navigation';
import Jumbotron from '../../components/Home/jumbotron';
import Homeinfo from "../../components/Home/homeinfo";
import Intro from "../../components/Home/Intro";
import Jumbotron2 from "../../components/Home/jumbotron2";
import Footer from "../../components/Home/Footer";

import { Grid } from '@material-ui/core';

const HomePage = () => {

    return (
      <Grid container>

          <Navigation />

          <Jumbotron />

          <Homeinfo />

          <Jumbotron2 />
          
          <Intro />

          <Footer />

      </Grid>     
    );
};

export default HomePage;
