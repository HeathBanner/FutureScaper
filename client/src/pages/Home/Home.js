import React, { Component } from 'react';
import Trefle from '../../components/Trefle/Trefle';


import logo from './logo.svg';

class HomePage extends Component {
  render() {
    return (
      <div className='Home'>
          <div className='row'>
            <div className="col-lg-9">
              <img src={logo} className='App-logo' alt='logo' />
              <p>
                Edit <code>src/pages/Home.js</code> and save to reload.
              </p>
              <a className='App-link' href='https://reactjs.org' target="_blank" rel="noopener noreferrer">
                Learn React
              </a>

            </div>
              <Trefle />
          </div>

      </div>
    );
  }
}

export default HomePage;
