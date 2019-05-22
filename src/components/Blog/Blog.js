import React, { Component } from 'react';
import recent_pic from "./recent.png";
import './Blog.css';
import RecentBlog from "../RecentBlog/RecentBlog";
import Explore from "../Explore/Explore";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

class  Blog extends Component {

    render() {

        return (
            <Router>
           <div id="mainDiv">
               <div id="leftDiv">
                   <Link to="/most_recent" >
                <a id="mostReasonLi">
                    <img className="recent_icon" src={recent_pic} alt="icon" /> Most Recent
                </a>
                   </Link>
               </div>
               <div id="centerDiv">
                   <Switch>
                       <Route exact path="/most_recent" component={RecentBlog} />
                       <Route path="/explore" component={Explore} />
                   </Switch>
               </div>
               <div id="rightDiv"></div>
               <div>

               </div>
           </div>
            </Router>
        );
    }
}

export default Blog;