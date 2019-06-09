import React, { Component } from 'react';
import  { Redirect, Link } from 'react-router-dom';
import Icon  from '@material-ui/core/Icon';

import "./register.css";
class Register extends Component {
  state = {
    email: '',
    password: '',
    registered: false,
    error: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name, value)
    this.setState({[name]: value});
  }

  handleSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;

    fetch('/api/users/register', {
      method: 'POST',
      body: JSON.stringify({email: email, password: password}),
      headers: {'Content-Type': 'application/json'}
    })
      .then(res => res.json())
      .then((result) => {
        if(result._id){this.setState({registered: true})}
        else{this.setState({error: result})}     
        console.log(result)
      })
  }

  render() {
    const { email, password } = this.state;

    if (this.state.registered){return(<Redirect to="/login" />)}

    return (
      <div className="container">
      <div className='RegisterForm top'>
        <div className='card'>
          <div className='card-body'>
            <h1 id="register-header">Register</h1>
            <form className='RegisterForm' onSubmit={this.handleSubmit}>
              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <Icon>mail</Icon>
                  </span>
                </div>
                {() => this.componentDidUpdate}
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
                  <span className="input-group-text">
                    <Icon>vpn_key</Icon>
                  </span>
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

              <button className='btn btn-primary lbutton' type='submit'>Submit</button>
            </form>
          <Link to="/login" onClick={this.toggleCollapse}>
            <button className='btn btn-primary lbutton' type='submit'>Login</button>
          </Link>
          </div>
        </div>
        {this.state.error &&
          <div className='row alert'>
            <div className='col'>
              <div className='alert alert-danger mb-3' role='alert'>
                {this.state.error}
              </div>
            </div>
          </div>}

      </div>
      </div>
    )
  }
}

export default Register;
