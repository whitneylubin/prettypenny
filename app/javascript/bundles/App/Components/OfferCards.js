import React, { Component } from 'react'
import ReactOnRails from 'react-on-rails';
import { BrowserRouter as Router } from 'react-router-dom';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';



class OfferCards extends React.Component {
  render() {

    return (
      <div>
        <Card className="w-25 p-3">
          <CardImage className="img-fluid"  src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" />
            <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                <Button href="#">Button</Button>
            </CardBody>
        </Card>
      </div>
    )
  }
}
export default OfferCards;
