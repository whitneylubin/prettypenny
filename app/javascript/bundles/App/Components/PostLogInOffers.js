import React, { Component } from 'react'
import ReactOnRails from 'react-on-rails';
import { BrowserRouter as Router } from 'react-router-dom';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import LogInNav from './LogInNav.js';
import OfferCards from './OfferCards.js';

class PostLogInOffers extends React.Component {
  render() {

    return (
      <div>
        <div>
          <LogInNav />
        </div>
        <div>
          <OfferCards />
        </div>
      </div>
    )
  }
}
export default PostLogInOffers;
