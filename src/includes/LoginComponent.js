import React from 'react'
import { Image, InputGroup, FormControl, Button, Card } from "react-bootstrap";


export default function LoginComponent() {
    return (
        <div>
             <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">UserName</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Email"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Password"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <Button variant="success" className="form-login">
              Log In
            </Button>
            <div className="socials">
              <Button className="social-btn google">
                <i className="text-danger rounded fa fa-google"></i> Login With
                Google
              </Button>
              <Button className="social-btn">
                <i className="text-primary mr-1 rounded fa fa-facebook"></i>
                Login With Facebook
              </Button>
              </div>
        </div>
    )
}
