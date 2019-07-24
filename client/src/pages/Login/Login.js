import React, { useState, useContext, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';

import LoginForm from '../../components/LoginForm/LoginForm';


const Login = () => {

  const auth = useContext(AuthContext);
  
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (email, password) => {

    fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({email: email, password: password}),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(({user, token}) => {

      auth.onLogin(user, token);
      setRedirectToReferrer(true);
      setError('');
    });
  };

  const renderRedirect = () => {

    if (redirectToReferrer) {
      return <Redirect to={'/'} />;
    }
  };

  return (
    
    <Fragment>

      <LoginForm onSubmit={handleSubmit} error={error} />

      {renderRedirect()}

    </Fragment>

  );
};

export default Login;
