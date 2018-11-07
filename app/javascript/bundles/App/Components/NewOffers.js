import React, { Component } from "react";
import ReactOnRails from "react-on-rails";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from "mdbreact";
import MyNav from "./MyNav.js";
import OfferCards from "./OfferCards.js";

class NewOffers extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Router>
            <MyNav isLoggedIn={this.props.isLoggedIn} />
          </Router>
        </div>
        <div>
          <OfferCards />
        </div>
      </div>
    );
  }
}
export default NewOffers;
