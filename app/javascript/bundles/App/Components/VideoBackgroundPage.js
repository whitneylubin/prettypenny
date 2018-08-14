import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './VideoBackgroundPage.css'
import Nav from './Nav.js'


class VideoBackgroundPage extends React.Component {



  render(){
  const overlay = <div id="sidenav-overlay" style={{backgroundColor: 'transparent'}} onClick={this.handleNavbarClick}/>
    return (
      <div id="videobackground">
        <View className="fullView">
          <video className="video-intro" poster="https://mdbootstrap.com/img/Photos/Others/background.jpg" playsInline autoPlay muted="" loop>
            <source src="https://mdbootstrap.com/img/video/animation.mp4" type="video/mp4"/>
          </video>
          <Mask id='overflow' className="d-flex justify-content-center gradient">
            <Container className="px-md-3 px-sm-0">
              <Row>
                <Col md="12" className="mb-4 white-text text-center">
                    <h3 className="display-3 font-weight-bold mb-0 pt-md-5">Pretty Penny</h3>
                    <hr className="hr-light my-4 w-75"/>
                    <h4 className="subtext-header mt-2 mb-4">Don't just be a pretty face, invest in your future.</h4>
                    <Button outline rounded color="white"><Fa icon="home"/>Download Pretty Penny</Button>
                </Col>
              </Row>
            </Container>
          </Mask>
        </View>

        <Container>
          <Row className="pt-5 pb-4">
            <Col md="12" className="text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default VideoBackgroundPage;
