import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Gravatar from 'react-gravatar';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';

import AuthContext from '../../contexts/AuthContext';

class AuthDropdown extends Component {
  static contextType = AuthContext;

  state = {
    isOpen: false
  }

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    });
    console.log(this.state.isOpen)
  }

  handleLogout = () => {
    this.context.onLogout();
    this.props.onClick();
  }

  render() {
    const { user } = this.context;
    const { isOpen } = this.state;

    // const dropdownMenuClass = `dropdown-menu dropdown-menu-right ${isOpen && 'show'}`;

    return (
      <li className="nav-item dropdown">
        <Button onClick={() => this.toggleOpen()}>
          <Gravatar className="rounded-circle" email={user.email} size={30} /> 
          <div id="nav-email">
            {user.email}
          </div>
        </Button>

        <Collapse in={isOpen} aria-labelledby="navbarDropdown">
          <div >
            <div className="dropdown-item" onClick={this.handleLogout}>Logout</div>
          </div>
        </Collapse>
      </li>
    );
  }
}

export default AuthDropdown;
