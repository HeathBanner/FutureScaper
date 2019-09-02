import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { MediaProvider } from './contexts/MediaContext';

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Search from "./pages/Search/Search";
import Register from "./pages/Register/Register";

import './reset.css';

const App = () => {
  return (
    <AuthProvider>
      <MediaProvider>
        <div className='App'>
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path="/search" component={Search}/>
              <Route exact path='/' component={Home} />
              <Route component={NotFound} />
            </Switch>
        </div>
      </MediaProvider>
    </AuthProvider>
  );
};

export default App;
