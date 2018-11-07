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
import NewOffers from "./NewOffers.css";

class OfferCards extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-around">
        <Card className="w-25 p-3">
          <CardImage
            className="img-fluid"
            src="https://images.ulta.com/is/image/Ulta/2057849"
          />
          <CardBody>
            <CardTitle>Cetaphil Daily Facial Cleanser</CardTitle>
            <CardText>
              Kayla's Beauty Supply, Elegant Beauty Supply, Sally's Beauty
              Supply
            </CardText>
            <Button href="#">$1.75</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default OfferCards;
