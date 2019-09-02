import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import NavDrawer from './Drawer';

import { MediaContext } from '../../contexts/MediaContext';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    borderBottom: '5px solid #3f51b5',
  },
  linksContainer: {
    padding: '20px 20px',
    position: 'relative',
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
  
  const classes = useStyles();
  const media = useContext(MediaContext);

  return (
    <Grid
      alignItems="center"
      className={classes.container}
      container
    >

      <Grid className={classes.linksContainer} item xs={12}>

        <NavDrawer />

        <Typography
          style={{ color: 'rgb(84, 84, 84)' }}
          variant={media.xs ? 'h5' : 'h2'}
          align="center"
        >
          <Link
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
            to="/"
          >
            Future Scaper
          </Link>
        </Typography>

      </Grid>

    </Grid>
  );
};

export default Navigation;
