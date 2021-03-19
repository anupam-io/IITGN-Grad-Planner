import React from "react";
import "./Navbar.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function Navigation() {
  return (
    <Navbar classsName="px-5" bg="primary" variant="dark" sticky="top">
      <Navbar.Brand href="#home">Glanner</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">My Plans</Nav.Link>
        <Nav.Link href="#features">Create new plan</Nav.Link>
        <Nav.Link href="#pricing">Documentation</Nav.Link>
        <Nav.Link href="#pricing">About us</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Plan name" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>

    // <Navbar className="bg-primary">
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link style={{ color: "white" }} href="/login">
    //         Login
    //       </Nav.Link>
    //       <Nav.Link style={{ color: "white" }} href="/logout">
    //         Logout
    //       </Nav.Link>
    //       <Nav.Link style={{ color: "white" }} href="/dashboard">
    //         Dashboard
    //       </Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  );
}

export default Navigation;
