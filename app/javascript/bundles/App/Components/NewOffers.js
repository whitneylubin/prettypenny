import React, { Component } from 'react'
import ReactOnRails from 'react-on-rails';
import { BrowserRouter as Router } from 'react-router-dom';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Column, Row } from 'mdbreact';
import Nav from './Nav.js';
import OfferCards from './OfferCards.js';

class NewOffers extends React.Component {
  render() {

    return (
      <div>
        <div>
          <Router>
            <Nav isLoggedIn={this.props.isLoggedIn} />
          </Router>
        </div>
        <div>
          <div className="d-flex justify-content-center">
            <OfferCards />
          </div>
        </div>
      </div>
    )
  }
}
export default NewOffers;
