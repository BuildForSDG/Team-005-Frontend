import React, { Component } from "react";
import { Navbar, Nav, Button, Form, FormControl, Image } from "react-bootstrap";
import banner from "../assets/img/Banner.svg";

class Login extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Image
          src={banner}
          alt="banner"
          height="100%"
          className="banner"
          fluid
        />
        <div className="banner-quote">
          "<span className="emphasize1">Education</span>
          Is The Most <span className="emphasize2">powerful</span> Tool You can
          Use To change The World"
          <br />
          <span className="quote-author">
              -Nelson mandela
          </span>
        </div>

      </React.Fragment>
    );
  }
}

export default Login;
