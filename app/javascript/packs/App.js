import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import App from '../bundles/App/App.js';
import HelloWorld from '../bundles/App/Components/HelloWorld.jsx';
import Landing from '../bundles/App/Components/Landing.js';
import SignUp from '../bundles/App/Components/SignUp.js';
import LogIn from '../bundles/App/Components/LogIn.js';
import NewOffers from '../bundles/App/Components/NewOffers.js'


ReactOnRails.register({
  //REGISTER COMPONENTS BEFORE USING!
    App, HelloWorld, Landing, SignUp, LogIn, NewOffers
});
