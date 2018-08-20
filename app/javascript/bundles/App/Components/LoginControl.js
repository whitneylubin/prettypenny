import React, { Component } from 'react';
import ReactOnRails from 'react-on-rails';
import { Button, NavLink} from 'mdbreact';



const handleLogoutClick = () => {
  let link = document.createElement('a');
  link.setAttribute('href', 'users/sign_out');
  link.setAttribute('rel', 'nofollow');
  link.setAttribute('data-method', 'delete');
  document.body.appendChild(link);
  link.click();
}


const handleLoginClick = () => {
  let link = document.createElement('a');
  link.setAttribute('href', '/users/sign_in');
  document.body.appendChild(link);
  link.click();
}




class LoginControl extends React.Component {

  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }



  render() {

    const isLoggedIn = this.props.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <Button onClick={handleLogoutClick}>LogOut</Button>;
    } else {
      button = <Button onClick={handleLoginClick}>LogIn</Button>;
    }

    return (
      <NavLink to="#!">{button}</NavLink>
    );
  }
}

export default LoginControl;
