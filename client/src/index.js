import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import './CSS/Footer.css';
import './CSS/MediaQueries.css';
import MainPage from './Main/MainPage.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <MainPage/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
