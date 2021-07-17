import React from "react";
import "./Navbar.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar className="bg-dark px-3 py-2" sticky="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Brand href="/" style={{ color: "white" }}>
        <b>PLANNER</b>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="text-light" href="/dashboard">
            Dashboard
          </Nav.Link>
          <Nav.Link className="text-light" href="/gen-share-link">
            Share Plan
          </Nav.Link>
          <Nav.Link className="text-light" href="/devs">
            About Us
          </Nav.Link>
          <Nav.Link className="text-light" href="/login">
            Login
          </Nav.Link>
          <Nav.Link className="text-light" href="/logout">
            Logout
          </Nav.Link>
          <Nav.Link href="/create-new-plan">
            <Button className="m-0 p-0 px-3" variant="outline-light">
              <b>+</b>
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <Form inline>
        <FormControl
          type="text"
          placeholder="Plan name"
          className="mr-4 my-auto"
        />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  );
}

export default Navigation;
