import React, { Component } from 'react'
import ReactOnRails from 'react-on-rails';
import { BrowserRouter as Router } from 'react-router-dom';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import MyNav from './MyNav.js';
import OfferGrid from './OfferGrid.js';



class NewOffers extends React.Component {
  render() {

    return (
        <div>
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <Router>
                  <MyNav isLoggedIn={this.props.isLoggedIn} />
                </Router>
              </div>
            </div>
          </div>
        <OfferGrid />
      </div>
    )
  }
}
export default NewOffers;
