import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Button, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(45deg, #bbc5fc 30%, #99a9ff 90%)'
  },
  paper: {
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
  }
}));

const Register = () => {

  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleSubmit = () => {
    console.log(email, password)
    fetch('/api/users/register', {
      method: 'POST',
      body: JSON.stringify({email: email, password: password}),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then((result) => {
      console.log(result);
      if(result._id){
        setRegistered(true);
      }
      else{
        setError(result);
      }     
    });
  };

  if (registered){ return(<Redirect to="/login" />) }

  return (

      <Grid container>
        <Grid className={classes.container} item xs={12}>

          <Paper className={classes.paper}>

            <Typography className={classes.typo} color="primary" variant="h3" align="center">
              Register
            </Typography>

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

              <Button className={classes.submit} onClick={handleSubmit}>

                <Typography variant="h6">
                  Submit
                </Typography>

              </Button>

              <Link className={classes.login} to="/login">
                <Button className={classes.loginButton}>

                  <Typography variant="h6">
                    Back To Login
                  </Typography> 

                </Button>
              </Link>

            {
              error 

              ? 

              <Typography className={classes.error} color="error" variant="h6" align="center">
                {error}
              </Typography> 

              : 
              
              ''
            }

          </Paper>

        </Grid>
      </Grid>

  );
};

export default Register;
