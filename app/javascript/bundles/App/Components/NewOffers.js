import React, { Component } from 'react'
import ReactOnRails from 'react-on-rails';
import { BrowserRouter as Router } from 'react-router-dom';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import MyNav from './MyNav.js';
import OfferCards from './OfferCards.js';



class NewOffers extends React.Component {
  render() {

    return (
      <div className="container-fluid">
        <div className="row">
          <Router>
            <MyNav isLoggedIn={this.props.isLoggedIn} />
          </Router>
        </div>
        <div className="container-fluid">
          <div className="card-deck">
            <OfferCards />
          </div>
        </div>
      </div>
    )
  }
}
export default NewOffers;
