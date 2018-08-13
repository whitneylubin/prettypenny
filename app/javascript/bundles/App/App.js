import ReactOnRails from 'react-on-rails';
import React, { Component } from 'react';
import Nav from './Components/Nav.js';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Nav user={this.props.user} />
      </div>
    );
  }
}

export default App;
