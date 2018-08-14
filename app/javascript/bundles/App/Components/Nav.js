import ReactOnRails from 'react-on-rails';
import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import VideoBackgroundPage from './VideoBackgroundPage.css'



class Nav extends Component {
  constructor(props) {
    super(props),
    this.state = {
      collapse : false
    }
    this.onClick = this.onClick.bind(this);
    this.handleNavbarClick = this.handleNavbarClick.bind(this);
  }

  onClick(){
    this.setState({
        collapse: !this.state.collapse,
    });
  }

  handleNavbarClick(){
    this.setState({
      collapse: false
    });
  }

    render() {
      const overlay = <div id="sidenav-overlay" style={{backgroundColor: 'transparent'}} onClick={this.handleNavbarClick}/>
        return (
          <Router>
            <div>
              <Navbar dark expand="md" fixed="top" scrolling>
                <Container>
                  <NavbarBrand>
                    <span className="white-text">PrettyPenny</span>
                  </NavbarBrand>
                  <NavbarToggler onClick = { this.onClick } />
                  <Collapse isOpen = {this.state.collapse} navbar>
                    <NavbarNav left>
                      <NavItem>
                        <NavLink to="#!">Find Offers</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="#!">How It Works</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="#!">Log In</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="#!">Sign Up</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="#!">Opinions</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="#!">Team</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="#!">Contact</NavLink>
                      </NavItem>
                    </NavbarNav>
                    <NavbarNav right >
                      <NavItem>
                        <NavLink to="!#">
                          <Fa icon="facebook"></Fa>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="!#">
                          <Fa icon="twitter"></Fa>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="!#">
                          <Fa icon="instagram"></Fa>
                        </NavLink>
                      </NavItem>
                    </NavbarNav>
                  </Collapse>
                </Container>
              </Navbar>
            { this.state.collapse && overlay}
            </div>
          </Router>
        );
    }
}

export default Nav;
