import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import API from '../../lib/API';
import TokenStore from '../../lib/TokenStore';
import AuthContext from '../../contexts/AuthContext';
import Navigation from '../../components/Navigation/Navigation';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import Login from '../../pages/Login/Login';
import Secret from '../../pages/Secret/Secret';
import Home from '../../pages/Home/Home';
import NotFound from '../../pages/NotFound/NotFound';
import About from '../../pages/Home/Home';
import Search from "../../pages/Search/Search"
import Example from "../DnD/Example"
import Register from "../../pages/Register/Register"
import Plot from '../../pages/Plot/Plot';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleLogin = (user, authToken) => {
      TokenStore.setToken(authToken);
      this.setState(prevState => ({ auth: { ...prevState.auth, user, authToken } }));
    };

    this.handleLogout = () => {
      TokenStore.clearToken();
      this.setState(prevState => ({ auth: { ...prevState.auth, user: undefined, authToken: undefined } }));
    }  

    this.state = {
      auth: {
        user: undefined,
        authToken: TokenStore.getToken(),
        onLogin: this.handleLogin,
        onLogout: this.handleLogout
      },
    }
  }
  

  componentDidMount() {
    const { authToken } = this.state.auth;
    if (!authToken) return;

    API.Users.getMe(authToken)
      .then(response => response.data)
      .then(user => this.setState(prevState => ({ auth: { ...prevState.auth, user } })))
      .catch(err => console.log(err));
  }

  render() {
    return (
     
      <AuthContext.Provider value={this.state.auth}>
        <div className='App'>
          {/* <Navigation /> */}
          <div className='container-fluid'>
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path="/about" component={About} />
              <Route path="/search" component={Search}/>
              <Route path="/create" component={Plot}/>
              <PrivateRoute path='/secret' component={Secret} />
              <Route exact path='/' component={Home} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </AuthContext.Provider>
    );
  }
}



export default App;



