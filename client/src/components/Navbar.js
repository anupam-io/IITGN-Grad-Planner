import React from 'react';
import './Navbar.css';
import { Navbar, Nav} from 'react-bootstrap';

function Navigation(){
    return (
        <Navbar className="bg-primary" >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link style={{color: "white"}} href="/login">Login</Nav.Link>
                    <Nav.Link style={{color: "white"}} href="/logout">Logout</Nav.Link>
                    <Nav.Link style={{color: "white"}} href="/dashboard">Dashboard</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;