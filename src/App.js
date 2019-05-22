import React, { Component } from 'react';
import './components/Header/Header.css';
import header_logo from "./components/Header/header_logo.png";
import  Home from './components/Home/Home';
import  Explore from './components/Explore/Explore';
import  EventManager from './components/EventManager/EventManager';
import  Blog from './components/Blog/Blog';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <header id="header">
            <div className="container">
              <div id="logo">
                  <div className="nav_name">
                      <div><img className="img-responsive" src={header_logo} alt="logo"/></div>
                      <div className="vl"><h1>Serendib</h1></div>
                  </div>
              </div>
              <nav id="nav-menu">
                <ul className="nav-menu">
                  {/*  Please use Link tag to connect to the routes, anything you want to add to change page use this tag,
                  then it will easy to redirect*/}
                  <li><Link to="/">Home</Link></li>
                    <li><Link to="/eventManager">Event Manager</Link></li>
                  <li><Link to="/explore">Explore</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
              </nav>

            </div>
          </header>

          <body id="body">
          <hr/>
          {/*<empty>Do not add anything here</empty>*/}
          </body>

          <div>
            {/*  Please ad your Routes inside following Switch, mention path to link */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/explore" component={Explore} />
              <Route path="/eventManager" component={EventManager}/>
                <Route path="/blog" component={Blog}/>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
