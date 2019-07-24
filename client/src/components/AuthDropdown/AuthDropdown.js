import React, { useState, useContext, Fragment } from 'react';

import { Link } from 'react-router-dom';
import Gravatar from 'react-gravatar';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Fab, Slide, useMediaQuery, Icon, Button, Typography, Grid } from '@material-ui/core';

import AuthContext from '../../contexts/AuthContext';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  logout: {
    [theme.breakpoints.up('md')]: {
      marginRight: 30,
    },
    [theme.breakpoints.down('md')]: {
      marginRight: 30,
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: 20,
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: 10,
    },
    '&:hover': {
      background: 'rgba(0,0,0,0.1)'
    },
  },
  typo: {
    marginLeft: 10,
  },
}));

const AuthDropdown = (props) => {
  
  const auth = useContext(AuthContext);
  const { user } = auth;

  const classes = useStyles();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(false);

  const open = Boolean(anchorEl);

  const xs = useMediaQuery(theme.breakpoints.down('xs'));

  const getVariant = () => {
    if(xs) { return 'body1' }
    else { return 'h6' }
  };

  const toggleOpen = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }

  const handleLogout = () => {
    auth.onLogout();
    props.onClick();
  }

  const renderDropdown = () => {

    if(auth.user) {

      return (

        <Grid className={classes.container} item xs={12}>

            {
              xs 
                ? 
                  <Fragment>

                      <Slide direction="down" in={open} mountOnEnter unmountOnExit>
                                  
                          <Button className={classes.logout} onClick={handleLogout}>
        
                            <Typography variant={getVariant()}>
                              Logout
                            </Typography>
        
                          </Button>
            
                      </Slide>
                  
                      <Fab onClick={toggleOpen}>
                        <Icon>menu</Icon>
                      </Fab>

                  
                  </Fragment>
                :

                  <Fragment>

                    <Slide direction="down" in={open} mountOnEnter unmountOnExit>
                                  
                      <Button className={classes.logout} onClick={handleLogout}>

                        <Typography variant="h6">
                          Logout
                        </Typography>

                      </Button>

                    </Slide>

                    <Button className={classes.container} onClick={toggleOpen}>

                      <Gravatar email={user.email} size={30} /> 
                      <Typography className={classes.typo} variant="h6">
                        {user.email}
                      </Typography>

                    </Button>


                  </Fragment>
            }

        </Grid>
      );
    } 
    else {
      return (

        <Link style={{textDecoration: 'none'}} to="/login">
          <Button>

            <Typography variant="h6">
              Login
            </Typography>

          </Button>
        </Link>

      );
    }
  };

  return (
    <Fragment>
      {renderDropdown()}
      

    </Fragment>
  );
};

export default AuthDropdown;
