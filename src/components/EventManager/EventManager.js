import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import navbar from "react-bootstrap/navbar"
import nav from "react-bootstrap/nav"
import navDropdown from "react-bootstrap/navdropdown"


class EventManager extends Component {
    render() {

        return (
            <navbar bg="light" expand="lg">
                <navbar.Brand href="#home">React-Bootstrap</navbar.Brand>
                <navbar.Toggle aria-controls="basic-navbar-nav" />
                <navbar.Collapse id="basic-navbar-nav">
                    <nav className="mr-auto">
                        <nav.Link href="#home">Home</nav.Link>
                        <nav.Link href="#link">Link</nav.Link>
                        <navDropdown title="Dropdown" id="basic-nav-dropdown">
                            <navDropdown.Item href="#action/3.1">Action</navDropdown.Item>
                            <navDropdown.Item href="#action/3.2">Another action</navDropdown.Item>
                            <navDropdown.Item href="#action/3.3">Something</navDropdown.Item>
                            <navDropdown.Divider />
                            <navDropdown.Item href="#action/3.4">Separated link</navDropdown.Item>
                        </navDropdown>
                    </nav>

                </navbar.Collapse>
            </navbar>
        );
    }
}

export default EventManager;
