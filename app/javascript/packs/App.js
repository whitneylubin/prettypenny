import ReactOnRails from 'react-on-rails';
import ReactDOM from 'react-dom'
import 'babel-polyfill'
import App from '../bundles/App/App.js';
import HelloWorld from '../bundles/App/Components/HelloWorld.jsx'


ReactOnRails.register({
  //REGISTER COMPONENTS BEFORE USING!
    App, HelloWorld

});
