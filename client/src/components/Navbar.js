import React from "react";
import "./Navbar.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar className="bg-primary" sticky="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Brand href="/" style={{ color: "white" }}>
        Glanner
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link style={{ color: "white" }} href="/login">
            Login
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="/logout">
            Logout
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="/dashboard">
            Dashboard
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="/guidelines">
            Guidelines
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Form inline>
        <FormControl type="text" placeholder="Plan name" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  );
}

export default Navigation;
