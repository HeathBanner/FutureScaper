import React from 'react';

import { Parallax } from 'react-parallax';
import { Link } from "react-router-dom";

import Plan from "../../images/planner.png";
import Search from "../../images/search2.png";
import './Home.css';

import Navigation from '../../components/Navigation/Navigation';

import Home from '../../components/Home/Home';

import { Grid, Typography, Paper, Divider, Button, Tooltip, Zoom, Icon } from '@material-ui/core';

export default () => {

    return (
      <Grid container>
          <Navigation />

          <Home render={data => { return (
            <Grid item xs={12} className={data.classes.jumbotron}>

              <Parallax 
                  bgImage={require('../../images/flower1.png')}
                  bgImageAlt="Jumbtron"
                  strength={300}
              >
                  <div className="topJumbotron">
                      <Typography style={{ color: 'white' }} align="center" variant={data.getJumboVariant()}>
                          Garden planner for your every need
                      </Typography>
                  </div>
              </Parallax>
            </Grid>
          )}}/>

          <Home render={data => { return (
              <>
                <Grid className="bodyNav" item lg={6} md={6} xs={12}>
                    <Link className="imgLinks" to="/">
                        <Tooltip 
                          TransitionComponent={Zoom}
                          placement="right"  
                          title="This section is under construction. Sorry for any inconveniences!"
                        >
                          <img src={Plan} className="bodyIcons" alt="Plan Icon" />
                        </Tooltip>
                    </Link>
        
                    <Typography style={{ color: '#2b3987' }} variant="h3" align="center">
                      Plan out your Garden
                    </Typography>
        
                    <Link className="btnLinks" to="/">
                        <Button className="createButton">
                          <Typography style={{ color: '#2b3987' }} variant="h6" align="center">
                            Create Garden
                          </Typography>
                        </Button>
                    </Link>
                </Grid>
                <Grid className="bodyNav" item lg={6} md={6} xs={12}>
                  <Link className="imgLinks" to="/search">
                      <img src={Search} className="bodyIcons" alt="Search Icon" />
                  </Link>
        
                  <Typography style={{ color: '#2b3987' }} align="center" variant="h3">
                    Search Plant Database
                  </Typography>
                  
                  <Link className="btnLinks" to="/search">
                    <Button className="searchButton">
                      <Typography style={{ color: '#2b3987' }} variant="h6" align="center">
                        Search Database
                      </Typography>
                    </Button>
                  </Link>
              </Grid>
            </>        
          )}}/>

          <Home render={data => { return (
            <Grid item xs={12}>
              <Parallax 
                  bgImage={require('../../images/biel-morro.jpg')}
                  bgImageAlt="Jumbtron"
                  strength={300}
              >
                  <div className="bottomJumbotron">
                      <Typography style={{ color: 'white' }} variant={data.getJumboVariant()} align="center">
                          About Future Scaper
                      </Typography>
                  </div>
              </Parallax>
            </Grid>
          )}}/>
          
          <Home
            render={data => { return (
                <Grid className="container" item xs={12}>
                  <Paper className="paper">
      
                      <Typography className={data.classes.typo} color="primary" variant={data.xs ? 'h4' : 'h2'} align="center">
                          Welcome to our landscape planner!
                      </Typography>
      
                      <Divider className="divider"/>
      
                      <Typography className={data.classes.body} variant="body1" align="center">
                          When planning a garden, being able to quickly try 
                          out different planting styles can save a huge amount 
                          of time and ultimately help you grow healthier 
                          plants which produce more food. Whether you use 
                          traditional rows, containers, raised beds or square 
                          foot gardening, the Garden Planner gives you the 
                          flexibility to create the best design for your garden.
                      </Typography>
      
                      <Parallax
                          bgImage={require('../../images/leonard-cotte.jpg')}
                          bgImageAlt="Jumbtron"
                          strength={300}                    
                      >
                          <div className={data.classes.parallax}></div>
                      </Parallax>
      
                      <Typography className={data.classes.typo} color="primary" variant={data.xs ? 'h4' : 'h2'} align="center">
                          Search the USDA database!
                      </Typography>
      
                      <Divider className="divider"/>
      
                      <Typography className={data.classes.body} variant="body1" align="center">
                          The USDA database provides standardized information about the 
                          vascular plants, mosses, liverworts, hornworts, and lichens of 
                          the U.S. and its territories. It includes names, plant symbols, 
                          checklists, distributional data, species abstracts, 
                          characteristics, images, crop information, automated tools, 
                          onward Web links, and references. This information primarily 
                          promotes land conservation in the United States and its 
                          territories, but academic, educational, and general use is 
                          encouraged. 
                      </Typography>
      
                  </Paper>
              </Grid>
              )}}/>

          <Home render={data => { return (
            <Grid item xs={12} className="footerContainer">
              <Typography style={{ color: 'white' }} variant="h6" align="center">
                  Future Scaper
              </Typography>
  
              <Icon style={{ color: 'white' }}>
                  copyright
              </Icon>
            </Grid>        
          )}}/>
      </Grid>     
    );
};
