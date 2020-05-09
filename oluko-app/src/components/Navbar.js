import React, { Component } from "react";
import { Navbar, Nav, Button, Form, FormControl, Image } from "react-bootstrap";
import "../App.css";
import logo  from '../assets/img/logo192.png'

class NavbarComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar className="nav-container" variant="light">
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
          <Nav className="mr-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Courses</Nav.Link>
            <Nav.Link href="#pricing">View Curriculum</Nav.Link>
          </Nav>
          <Form inline>
            <Button variant="success" className="login-btn">
              Log In
            </Button>
            <Button variant="danger" className="login-btn">
              Sign Up
            </Button>
            <FormControl
              type="text"
              placeholder="Search For Courses"
              className="mr-sm-2"
            />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </>
    );
  }
}

export default NavbarComponent;
