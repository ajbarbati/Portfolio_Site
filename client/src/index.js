import React from 'react'
import ReactDOM from 'react-dom'
import Landing from './components/Landing'
import './components/Contact/contact.css'
import './components/Landing/landing.css'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <Landing/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
