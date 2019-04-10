import React, { Component } from 'react';
import './Header.css';
import header_logo from "./header_logo.png";

class Home extends Component {
    render() {
        return (
            <header id="header">
                <div className="container">

                    <div id="logo" >
                        <a href="#intro" className="scrollto">
                            <img className="img-responsive v1" src={header_logo} alt="logo" />
                        </a>
                        <div class="vl" ><h1>Serendib</h1></div>
                    </div>


                    <nav id="nav-menu">
                        <ul className="nav-menu">
                            <li><a href="#intro">Home</a></li>
                            <li><a href="#explore">Explore</a></li>

                        </ul>
                    </nav>

                </div>
            </header>
        );
    }
}

export default Home;
