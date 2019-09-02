import React, { useState, useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';

import { MediaContext } from '../../contexts/MediaContext';

import { makeStyles } from '@material-ui/core/styles';
import { green, amber } from '@material-ui/core/colors';
import { Grid, Typography, TextField, Button, Paper, Divider, Icon, Snackbar, SnackbarContent } from '@material-ui/core';

const initInfo = {
  email: '',
  password: '',
};

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(45deg, #bbc5fc 30%, #99a9ff 90%)',
  },
  paper: {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  typo: {
    width: '100%',
    marginTop: 20,
    padding: '5px 50px',
  },
  input: {
    width: '80%',
    marginTop: 20,
  },
  submit: {
    width: '80%',
    marginTop: 20,
    padding: 10,
    color: 'white',
    background: 'linear-gradient(45deg, #8092ff 30%, #6b81ff 90%)',
    transition: 'all 0.4s ease',
    '&:hover': {
      background: 'linear-gradient(45deg, #99a7ff 30%, #8092ff 90%)',
      transform: 'scale(1.03)',
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
    padding: 10,
    background: 'linear-gradient(45deg, #ffe330 30%, #fcdb0d 90%)',
    transition: 'all 0.4s ease',
    '&:hover': {
      background: 'linear-gradient(45deg, #ffcd59 30%, #ffd678 90%)',
      transform: 'scale(1.03)',
    },
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  warning: {
      backgroundColor: amber[700],
  },
  success: {
      backgroundColor: green[600],
  },
  message: {
      display: 'flex',
      alignItems: 'center',
  },
}));

const Register = () => {

  const classes = useStyles();
  const media = useContext(MediaContext);

  const [info, setInfo] = useState({ ...initInfo });
  const [error, setError] = useState({
    open: false,
    message: '',
  });
  const [success, setSuccess] = useState({
    open: false,
    message: '',
  });
  const [warning, setWarning] = useState({
    open: false,
    message: '',
  });
  const [loggedIn, setLoggedIn] = useState(false);

  const closeError = () => { setError({ open: false, message: '' }); };
  const closeSuccess = () => { setSuccess({ open: false, message: 'Article Saved!' }); };
  const closeWarning = () => { setWarning({ open: false, message: '' }); };
  const toLogin = () => { return setLoggedIn(true); };

  const handleSubmit = () => {
    switch (true) {
      case !info.email:
        setWarning({ open: true, message: 'Email is required!' });
        break;
      case info.password.length < 6:
        setWarning({ open: true, message: 'Password must be more than 6 characters!' });
        break;
      default:
        fetch('/api/users/register', {
          method: 'POST',
          body: JSON.stringify(info),
          headers: { 'Content-Type': 'application/json' },
        })
          .then(res => res.json())
          .then((result) => {
            if (result.error) { return setError({ open: true, message: result.message }); }
            setSuccess({ open: true, message: 'Registration successful!'});
            return setInfo({ ...initInfo });
          });
    }
  };

  if (loggedIn) { return <Redirect to="/login" />; }
  return (
      <Grid container>
        <Grid className={classes.container} item xs={12}>

          <Paper className={classes.paper}>

            <Typography
              className={classes.typo}
              color="primary"
              variant={media.sm ? 'h3' : 'h1'}
              align="center"
            >
              Register
            </Typography>

            <Divider  style={{ width: '60%', marginBlockStart: '0.5em' }} />

              <TextField
                className={classes.input}
                variant="outlined"
                type='email'
                label='email@provider.com'
                value={info.email}
                onChange={(e) => setInfo({ ...info, email: e.target.value })}
              />

              <TextField
                className={classes.input}
                variant="outlined"
                type='password'
                label='password'
                value={info.password}
                onChange={(e) => setInfo({ ...info, password: e.target.value })}
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

          </Paper>

          <Snackbar
              anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
              }}
              open={error.open}
              autoHideDuration={6000}
              onClose={closeError}
            >
              <SnackbarContent
                className={classes.error}
                message={
                  <Typography className={classes.message}>

                    <Icon style={{ marginRight: 10 }}>
                        error
                    </Icon>

                    {error.message}

                  </Typography>
                }
                action={
                  <Button onClick={closeError}>
                      <Icon>close</Icon>
                  </Button>
                }
              />
            </Snackbar>

            <Snackbar
              anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
              }}
              open={success.open}
              autoHideDuration={6000}
              onClose={closeSuccess}
              onExiting={toLogin}
            >
              <SnackbarContent
                className={classes.success}
                message={
                  <Typography className={classes.message}>

                    <Icon style={{ marginRight: 10 }}>
                        check_circle
                    </Icon>

                    {success.message}

                  </Typography>
                }
                action={
                  <Button onClick={closeSuccess}>
                      <Icon>close</Icon>
                  </Button>
                }
              />
            </Snackbar>

            <Snackbar
              anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
              }}
              open={warning.open}
              autoHideDuration={6000}
              onClose={closeWarning}
            >
              <SnackbarContent
                className={classes.warning}
                message={
                  <Typography className={classes.message}>

                    <Icon style={{ marginRight: 10 }}>
                        warning
                    </Icon>

                    {warning.message}

                  </Typography>
                }
                action={
                  <Button onClick={closeWarning}>
                      <Icon>close</Icon>
                  </Button>
                }
              />
            </Snackbar>



        </Grid>
      </Grid>
  );
};

export default Register;
