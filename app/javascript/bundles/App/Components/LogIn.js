import React, { Component } from 'react';
import ReactOnRails from 'react-on-rails';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col, Input, Button } from 'mdbreact';
import MyNav from './MyNav.js';

class LogIn extends React.Component  {

  render() {

    return(
      <div>
        <div>
          <Router>
            <MyNav />
          </Router>
        </div>
      <Container>
        <Row>
          <Col md="6">
            <form>
              <p className="h5 text-center mb-4">Log In</p>
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
    );
  }
};

export default LogIn;
