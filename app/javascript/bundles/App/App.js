import React, { Component } from 'react';
import Nav from './Components/NavBar.js';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from 'Landing';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Nav user={this.props.user} />
        <Landing><Landing />
      </div>
    );
  }
}

export default App;
