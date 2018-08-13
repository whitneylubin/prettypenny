import ReactOnRails from 'react-on-rails';
import ReactDOM from 'react-dom'
import 'babel-polyfill'
import App from '../bundles/App/App.js';
import HelloWorld from '../bundles/App/Components/HelloWorld.jsx'
import Landing from '../bundles/App/Components/Landing.js'
import Nav from '../bundles/App/Components/Nav.js'

ReactOnRails.register({
  //REGISTER COMPONENTS BEFORE USING!
    App, HelloWorld, Landing, Nav

});
