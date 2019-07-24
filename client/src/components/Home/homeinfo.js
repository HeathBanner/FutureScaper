import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Plan from "../../images/planner.png";
import Search from "../../images/search2.png";

import Tilt from "react-tilt";

import About from "../About/About";

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography, Tooltip, Zoom, Divider } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  bodyNav: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  icons: {
    height: 150,
    width: 'auto',
    margin: '30px 0px',
  },
  createButton: {
    boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
    background: 'linear-gradient(45deg, #fcdb0d 30%, #ffe330 90%)',
    width: '100%',
    margin: '30px 0px',
    padding: '5px 10px',
    '&:hover': {
      background: 'linear-gradient(45deg, #ffd678 30%, #ffcd59 90%)',
    },
  },
  searchButton: {
    boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
    background: 'linear-gradient(45deg, #ffe330 30%, #fcdb0d 90%)',
    width: '100%',
    margin: '30px 0px',
    padding: '5px 10px',
    '&:hover': {
      background: 'linear-gradient(45deg, #ffcd59 30%, #ffd678 90%)',
    },
  },
  linkHeaders: {
    color: '#2b3987',
  },
  tiltLinks: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
  },
  links: {
    width: '70%',
    textDecoration: 'none',
  },
  buttonTypo: {
    color: '#2b3987',
  },
}));

const Homeinfo = () => {

  const classes = useStyles();
  const theme = useTheme();

  const sm = useMediaQuery(theme.breakpoints.down('sm'));

  const renderDivider = () => {
    if(sm) { 
      return (
        <Divider />
      );
    }
    else {
      return (
        <div style={{borderRight: '1px solid rgb(0, 0, 0, .5)', height: '85%'}}></div>
      );
    }
  };

  return (
    <Fragment>

        <Grid className={classes.bodyNav} item lg={5} md={5} xs={12}>
            
            <Link className={classes.tiltLinks} to="/">
              <Tilt>
                <Tooltip 
                  TransitionComponent={Zoom}
                  placement="right"  
                  title="This section is under construction as of July 23, 2019. Sorry for any inconveniences!"
                >

                  <img src={Plan} className={classes.icons} alt="Plan Icon" />

                </Tooltip>
              </Tilt>
            </Link>

            <Typography className={classes.linkHeaders} variant="h3" align="center">Plan out your Garden</Typography>

            <Link className={classes.links} to="/">

                <Button className={classes.createButton}>

                  <Typography className={classes.buttonTypo} variant="h6" align="center">
                    Create Garden
                  </Typography>

                </Button>

            </Link>

        </Grid>
        <Grid style={sm ? null : {display: 'flex', justifyContent: 'center', alignItems: 'center'}} item lg={1} md={1} xs={12}>
            
        {renderDivider()}

        </Grid>
        <Grid className={classes.bodyNav} item lg={5} md={5} xs={12}>

          <Link className={classes.tiltLinks} to="/search">
            <Tilt>
              <img src={Search} className={classes.icons} alt="Search Icon" />
            </Tilt>
          </Link>

          <Typography className={classes.linkHeaders} align="center" variant="h3">Search Plant Database</Typography>
          
          <Link className={classes.links} to="/search">
            <Button className={classes.searchButton}>
              <Typography className={classes.buttonTypo} variant="h6" align="center">
                Search Database
              </Typography>
            </Button>
          </Link>

      </Grid>

      <About />

    </Fragment>

  );
}

export default Homeinfo;
