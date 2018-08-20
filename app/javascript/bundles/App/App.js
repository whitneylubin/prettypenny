import ReactOnRails from 'react-on-rails';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from './Components/Landing.js'



class App extends Component {


  render() {
    return (
      <div>
        <Landing isLoggedIn={this.props.user} />
      </div>
    );
  }
}

export default App;
