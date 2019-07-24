import React from 'react';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Homeinfo from "../../components/Home/homeinfo";
import Jumbotron from '../../components/Home/jumbotron';
import Footer from "../../components/Footer/Footer";
import Navigation from '../../components/Navigation/Navigation';

import { Grid } from '@material-ui/core';

const HomePage = () => {

    return (
      <Grid container>

        <Navigation />

        <Jumbotron />

        <Homeinfo />

        <Footer />

      </Grid>     
    )
}

export default DragDropContext(HTML5Backend)(HomePage);
