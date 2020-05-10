import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
  Image
} from "react-bootstrap";
import "../App.css";
import logo from "../assets/img/logo192.png";

class NavbarComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar expand="lg" className="nav-container" variant="light">
          <Navbar.Brand className="navbar-brand" href="#home">
            <Image
              src={logo}
              width="30"
              height="30"
              alt="Logo"
              className="logo"
            />
            Olukọ
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Courses</Nav.Link>
            <Nav.Link href="#pricing">View Curriculum</Nav.Link>
          </Nav>
          <Nav>
          <Form inline>
            <Button variant="success" className="login-btn">
              Log In
            </Button>
            <Button variant="danger" className="signup-btn">
              Sign Up
            </Button>
            <FormControl
              type="text"
              placeholder="Search For Courses"
              className="mr-sm-2 search"
            />
            <Button variant="outline-info" className="search-btn">Search</Button>
          </Form>
          </Nav>
          </ Navbar.Collapse >
        </Navbar>
      </>
    );
  }
}

export default NavbarComponent;
