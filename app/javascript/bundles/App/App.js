import ReactOnRails from 'react-on-rails';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import VideoBackgroundPage from './Components/VideoBackgroundPage.js'




class App extends Component {


  render() {
    return (
      <div className="App">
        <VideoBackgroundPage user={this.props.user} />
      </div>
    );
  }
}

export default App;
