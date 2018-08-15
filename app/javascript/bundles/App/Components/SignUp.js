import React, { Component } from 'react';
import ReactOnRails from 'react-on-rails';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col, Input, Button } from 'mdbreact';
import Nav from './Nav.js';


class SignUp extends React.Component {

  render() {

    return(
      <div>
        <div>
          <Nav />
        </div>
      <div>
      <Container>
        <Row>
          <Col md="6">
            <form>
              <p className="h5 text-center mb-4">Sign up</p>
              <div className="grey-text">
                <Input label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                <Input label="Confirm your email" icon="exclamation-triangle" group type="text" validate error="wrong" success="right"/>
                <Input label="Your password" icon="lock" group type="password" validate/>
              </div>
              <div className="text-center">
                <Button color="primary">Sign Up</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
    );
  }
};

export default SignUp;
