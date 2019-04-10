import React, { Component } from 'react';
import './Header.css';

class Home extends Component {
    render() {
        return (
            <header id="header">
                <div className="container">

                    <div id="logo">
                        <h1><a href="#intro" className="scrollto">LOGO</a></h1>
                    </div>

                    <nav id="nav-menu">
                        <ul className="nav-menu">
                            <li><a href="#intro">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Tours</a></li>
                            <li><a href="#Hotels">Hotels</a></li>
                            <li><a href="#Transfers">Transfers</a></li>
                            <li><a href="#Blog">Blog</a></li>
                            <li><a href="#Gallery">Gallery</a></li>
                            <li><a href="#get-in-touch">Get In Touch</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

        );
    }
}

export default Home;
