import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Mask,
  Row,
  Col,
  Fa,
  Button,
  View,
  Container,
  FormInline
} from "mdbreact";
import SignUpControl from "./SignUpControl.js";
import LoginControl from "./LoginControl.js";

const handleLogout = () => {
  let link = document.createElement("a");
  link.setAttribute("href", "users/sign_out");
  link.setAttribute("rel", "nofollow");
  link.setAttribute("data-method", "delete");
  document.body.appendChild(link);
  link.click();
};

const handleFindOffers = () => {
  let link = document.createElement("a");
  link.setAttribute("href", "/new_offers");
  document.body.appendChild(link);
  link.click();
};

const handleNavBrand = () => {
  let link = document.createElement("a");
  link.setAttribute("href", "/");
  document.body.appendChild(link);
  link.click();
};

class Nav extends React.Component {
  constructor(props) {
    super(props),
      (this.state = {
        collapse: false
      });
    this.onClick = this.onClick.bind(this);
    this.handleNavbarClick = this.handleNavbarClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  handleNavbarClick() {
    this.setState({
      collapse: false
    });
  }

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleNavbarClick}
      />
    );
    return (
      <div>
        <Navbar dark expand="md" scrolling>
          <Container>
            <NavbarBrand>
              <strong className="white-text">
                <NavLink onClick={handleNavBrand} to="#!">
                  PrettyPenny
                </NavLink>
              </strong>
            </NavbarBrand>
            <NavbarToggler onClick={this.onClick} />
            <Collapse isOpen={this.state.collapse} navbar>
              <NavbarNav left>
                <NavItem active>
                  <NavLink onClick={handleFindOffers} to="#!">
                    Find Offers
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#!">How it Works</NavLink>
                </NavItem>
                <NavItem>
                  <SignUpControl isLoggedIn={this.props.isLoggedIn} />
                </NavItem>
                <NavItem>
                  <LoginControl isLoggedIn={this.props.isLoggedIn} />
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Container>
        </Navbar>
        {this.state.collapse && overlay}
      </div>
    );
  }
}

export default Nav;
