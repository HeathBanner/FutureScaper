import React, { Fragment } from 'react';

import Intro from "./intro";
import Jumbotron2 from "../Home/jumbotron2";

import { Grid } from '@material-ui/core';

const About = () => {

  return (
    <Fragment>

      <Grid item xs={12}>

        <Jumbotron2/>
        <Intro />

      </Grid>

    </Fragment>
  );
};

export default About