import React, { createContext, useState, useEffect } from 'react';

import TokenStore from '../lib/TokenStore';

const initUser = {
  info: '',
  token: TokenStore.getToken(),
};

export const AuthContext = createContext();

export const AuthProvider = (props) => {

  const [user, setUser] = useState({ ...initUser });
  const [loggedIn, setLoggedIn] = useState(false);
  
  const handleLogin = (user, authToken) => {
    TokenStore.setToken(authToken);
    setUser({
      info: { ...user },
      token: authToken,
    });
  };

  const handleLogout = () => {
    TokenStore.clearToken();
    setUser({ ...initUser });
    return setLoggedIn(false);
  };

  useEffect(() => {
    if (!user.token) { return; }
    fetch('/api/users/me', {
      headers: {
        'Authorization': `Bearer ${user.token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then((user) => {
        setLoggedIn(true);
        return setUser({
          ...user,
          info: { ...user },
        });
      })
      .catch(() => { return; });
  }, [user]);

  return (
      <AuthContext.Provider
        value={{
          user,
          handleLogin,
          handleLogout,
          loggedIn,
        }}
      >

          { props.children }

      </AuthContext.Provider>
  );
};
