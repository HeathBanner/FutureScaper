import React, { useState } from 'react';
import {Link} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Paper, Button }  from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(45deg, #bbc5fc 30%, #99a9ff 90%)'
  },
  paper: {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  typo: {
    marginTop: 20,
    padding: '5px 50px',
    borderBottom: '1px solid rgba(0,0,0,0.2)'
  },
  error: {
    width: '100%',
    marginTop: 20,
  },
  input: {
    width: '80%',
    marginTop: 20,
  },
  submit: {
    width: '80%',
    marginTop: 20,
    color: 'white',
    background: 'linear-gradient(45deg, #8092ff 30%, #6b81ff 90%)',
    '&:hover': {
      background: 'linear-gradient(45deg, #99a7ff 30%, #8092ff 90%)',
    },
  },
  login: {
    width: '80%',
    margin: '10px 0px 20px 0px',
    textDecoration: 'none !important',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    background: 'linear-gradient(45deg, #ffe330 30%, #fcdb0d 90%)',
    '&:hover': {
      background: 'linear-gradient(45deg, #ffcd59 30%, #ffd678 90%)',
    },
  },
}));

const LoginForm = (props) => {

  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (

    <Grid container>
      <Grid className={classes.container} item xs={12}>

        <Paper className={classes.paper}>

          <Typography className={classes.typo} color="primary" variant="h3" align="center">
            Login
          </Typography>

          {
            props.error 

              ? 

              <Typography className={classes.error} color="error" variant="h6" align="center">
                Email or Password didn't was invalid
              </Typography> 

              : 
              
              ''
          }
          
          <TextField
            className={classes.input}
            variant="outlined"
            type='email'
            label='email@provider.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            className={classes.input}
            variant="outlined"
            type='password'
            label='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button 
            className={classes.submit}
            onClick={() => props.onSubmit(email, password)}
          >

            <Typography variant="h6">
              Submit
            </Typography>

          </Button>

          <Link className={classes.login} to="/register">
            <Button className={classes.loginButton}>

              <Typography variant="h6">
                Create a new account
              </Typography>

            </Button>
          </Link>

        </Paper>

      </Grid>
    </Grid>
  );
};

export default LoginForm;

