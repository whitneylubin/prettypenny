import React, { Component } from 'react';
import ReactOnRails from 'react-on-rails';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col, Input, Button } from 'mdbreact';
import Nav from './Nav.js';

class LogIn extends React.Component  {

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
              <p className="h5 text-center mb-4">Log in</p>
              <div className="grey-text">
                <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                <Input label="Type your password" icon="lock" group type="password" validate/>
              </div>
              <div className="text-center">
                <Button>Login</Button>
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

export default LogIn;
