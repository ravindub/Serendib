import React, {Component} from 'react';
import recent_pic from "./recent.png";
import old_pic from "./old.png";
import share from './share-512.png';
import add_button from './Button-512.png';
import './Blog.css';
import EventCard from '../EventCard/EventCard';

class Blog extends Component {

    constructor(props, context) {
        super(props, context)

    }

    render() {

        return (

            <div id="mainDiv">
                <div id="leftDiv">
                    <div id="list1">
                        <a id="mostReasonLi" href="">
                            <img className="recent_icon" src={recent_pic} alt="icon"/> Most Recent
                        </a><br/>
                    </div>
                    <div id="list2">
                        <a id="mostReasonLi" href="">
                            <img className="old_icon" src={old_pic} alt="icon"/> Old Posts
                        </a><br/>
                    </div>
                </div>
                <div id="centerDiv">
                    <div id="center_form_div">
                        <form>
                            <textarea rows="12" cols="120"/><br/>
                            <a><img className="old_icon" src={share} alt="icon"/> </a>
                            <a><img className="old_icon" src={add_button} alt="icon"/> </a>
                            <input type="file" name="pic" accept="image/*" size="30"/>
                        </form>
                    </div>
                    <hr/>
                    <div id="center_content_div">
                        <EventCard/>
                    </div>
                </div>
                <div id="rightDiv"></div>
                <div>

                </div>
            </div>
        );
    }
}

export default Blog;