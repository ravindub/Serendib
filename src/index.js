import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EventManager from './components/EventManager/EventManager';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

ReactDOM.render(<EventManager />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
