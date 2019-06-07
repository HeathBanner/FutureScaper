import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../images/logo.png";
import AuthContext from '../../contexts/AuthContext';
import AuthDropdown from '../../components/AuthDropdown/AuthDropdown';
import Tilt from 'react-tilt';



class Navigation extends Component {
  static contextType = AuthContext;

  state = {
    collapsed: true
  }

  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { user } = this.context;
    const { collapsed } = this.state;
    const targetClass = `collapse navbar-collapse ${!collapsed && 'show'}`;
    const togglerClass = ` navbar-toggler ${collapsed && 'collapsed'}`;

    return (
      <div className="wrap fixed-top shadow">
      <div className='Navigation'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <Link to="/" onClick={this.toggleCollapse}>
        <Tilt className="Tilt" options={{ max : 25 }} >
        <img className="Tilt-inner logo" src={Logo} alt="logo"/>
        </Tilt>
        </Link>
          <Link className='navbar-brand' to='#'>
          </Link>
          <button className={togglerClass} onClick={this.toggleCollapse} data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className={targetClass} id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
                <Link className='nav-link' to='/about'  onClick={this.toggleCollapse}>About</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/search'  onClick={this.toggleCollapse}>Search</Link>
              </li>
            </ul>
            <ul className='navbar-nav'>
              {user
                ? <AuthDropdown onClick={this.toggleCollapse} />
                : <li className='nav-item'><Link className='nav-link' to='/login' onClick={this.toggleCollapse}>Login/Register</Link></li>}
            </ul>
          </div>
        </nav>
      </div>
      </div>
    );
  }
}

export default Navigation;