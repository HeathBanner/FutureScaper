import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';
import AuthDropdown from '../../components/AuthDropdown/AuthDropdown';

import Tilt from 'react-tilt';
import Search from "../../images/search2.png";

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Logo from "../../images/logo.png";

const useStyles = makeStyles(theme => ({
  container: {
    borderBottom: '5px solid #3f51b5',
  },
  linksContainer: {
    padding: '20px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  authContainer: {
    padding: '20px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  home: {
    [theme.breakpoints.up('md')]: {
      marginRight: 30,
    },
    [theme.breakpoints.down('md')]: {
      marginRight: 30,
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: 30,
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: 15,
    },
  },
  icons: {
    [theme.breakpoints.up('md')]: {
      height: 60,
      width: 'auto',  
    },
    [theme.breakpoints.down('md')]: {
      height: 60,
      width: 'auto',  
    },
    [theme.breakpoints.down('sm')]: {
      height: 60,
      width: 'auto',  
    },
    [theme.breakpoints.down('xs')]: {
      height: 50,
      width: 'auto',  
    },
  },
  divider: {
    [theme.breakpoints.up('md')]: {
      marginRight: 30,
    },
    [theme.breakpoints.down('md')]: {
      marginRight: 30,
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: 30,
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: 15,
    },
    height: 45,
    borderRight: '1px solid rgba(0,0,0,0.5)',
  }
}));

const Navigation = () => {
  
  const user = useContext(AuthContext);
  const classes = useStyles();

  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  }

  return (

    <Grid alignItems="center" className={classes.container} container>
      <Grid className={classes.linksContainer} item xs={4}>

        <Link className={classes.home} to="/" onClick={toggleCollapse}>
          <Tilt  options={{ max : 25 }} >
            <img className={classes.icons} src={Logo} alt="Logo"/>
          </Tilt>
        </Link>

        <div className={classes.divider}></div>

        <Link to="/search">
          <Tilt>
            <img src={Search} className={classes.icons} alt="Search Icon" />
          </Tilt>
        </Link>

      </Grid>
      <Grid className={classes.authContainer} item xs={8}>

        {
          user ? 

          <AuthDropdown onClick={toggleCollapse} />

              : 

          <Link className='nav-link' to='/login' onClick={toggleCollapse}>Login/Register</Link>       
        }

      </Grid>
    </Grid>

  );
};

export default Navigation;