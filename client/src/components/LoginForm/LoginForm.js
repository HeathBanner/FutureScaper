import React, { Component } from 'react';
import {Link} from "react-router-dom";

import "./login.css";

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    const { email, password } = this.state;

    this.props.onSubmit(email, password);
    event.preventDefault();
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="container">
      <div className='LoginForm'>
        <div className='card'>
          <div className='card-body'>
            <h1>Login</h1>
            <form className='LoginForm' onSubmit={this.handleSubmit}>
              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input
                  className='form-control'
                  id='email'
                  type='email'
                  name='email'
                  placeholder='email@provider.com'
                  value={email}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text">a3b</span>
                </div>
                <input
                  className='form-control'
                  id='password'
                  type='password'
                  name='password'
                  placeholder='password'
                  value={password}
                  onChange={this.handleInputChange}
                />
              </div>

              <button className='btn btn-primary lbutton' type='submit'>Login</button>
              <Link to="/register" onClick={this.toggleCollapse}>
              <button className='btn btn-primary lbutton' type='submit'>Create a new account</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default LoginForm;

