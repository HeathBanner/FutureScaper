import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import TokenStore from '../../lib/TokenStore';
import AuthContext from '../../contexts/AuthContext';

import Login from '../../pages/Login/Login';
import Home from '../../pages/Home/Home';
import NotFound from '../../pages/NotFound/NotFound';
import About from '../../pages/Home/Home';
import Search from "../../pages/Search/Search"
import Register from "../../pages/Register/Register"
// import Plot from '../../pages/Plot/Plot';

import './App.css';

const App = () => {

  const [auth, setAuth] = useState({
    user: undefined,
    authToken: TokenStore.getToken(),
    onLogin: handleLogin,
    onLogout: handleLogout
  });

  const [didMount, setDidMount] = useState(false);
  
  function handleLogin(user, authToken) {

    TokenStore.setToken(authToken);
    setAuth({ ...auth, user, authToken });
  };

  function handleLogout() {

    TokenStore.clearToken();
    setAuth({ ...auth, user: undefined, authToken: undefined });
  }  

  useEffect(() => {

    const { authToken } = auth;
    if (!authToken) { return }
    if(!didMount) {

      setDidMount(true);
      fetch('/api/users/me', {
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        },
      })
      .then(response => response.json())
      .then(user => setAuth({ ...auth, user }))
      .catch(err => { return });
    }
  });

  return (
    
    <AuthContext.Provider value={auth}>
      <div className='App'>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path="/about" component={About} />
            <Route path="/search" component={Search}/>
            {/* <Route path="/create" component={Plot}/> */}
            <Route exact path='/' component={Home} />
            <Route component={NotFound} />
          </Switch>
      </div>
    </AuthContext.Provider>
  );
};

export default App;



