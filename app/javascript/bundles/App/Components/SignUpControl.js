import React, { Component } from 'react';
import ReactOnRails from 'react-on-rails';
import { Button, NavLink} from 'mdbreact';



const handleSignUpClick = () => {
  let link = document.createElement('a');
  link.setAttribute('href', '/sign_up');
  document.body.appendChild(link);
  link.click();
}

const handleContactUsClick = () => {
  let link = document.createElement('a');
  link.setAttribute('href', 'users/contact_us');
  document.body.appendChild(link);
  link.click();
}



class SignUpControl extends React.Component {

  constructor(props) {
    super(props);
    this.handleSignUpClick = this.handleSignUpClick.bind(this);
    this.handleContactUsClick = this.handleContactUsClick.bind(this);
  }

  handleContactUsClick() {
    this.setState({isLoggedIn: true});
  }

  handleSignUpClick() {
    this.setState({isLoggedIn: false});
  }



  render() {

    const isLoggedIn = this.props.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <Button onClick={handleContactUsClick}>Contact Us</Button>;
    } else {
      button = <Button onClick={handleSignUpClick}>Sign Up</Button>;
    }

    return (
      <NavLink to="#!">{button}</NavLink>
    );
  }
}

export default SignUpControl;
