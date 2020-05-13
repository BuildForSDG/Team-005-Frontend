import React from "react";
import { Image, InputGroup, FormControl, Button, Card } from "react-bootstrap";
import banner from "../assets/img/Banner.svg";
import CardComponent from "../includes/CardComponent";
import courses from "./data.json";

export default function Login() {
  return (
    <div className="login-body">
      <Image src={banner} alt="banner" height="100%" className="banner" fluid />
      <div className="banner-quote">
        "<span className="emphasize1">Education</span>
        Is The Most <span className="emphasize2">powerful</span> Tool You can
        Use To change The World"
        <br />
        <span className="quote-author">-Nelson mandela</span>
      </div>

      <div className="body">
        <div className="login-courses">
          {/* //////////////Why Section//////////////////// */}
          <h1>What We Offer :</h1>
          <div className="top-section">
            <Card className="card">
              <Card.Img
                variant="top"
                alt="course Image"
                src={require("../assets/img/cap.png")}
                height="200px"
                className="image-fit"
              />
              <Card.Body>
                <Card.Title className="text-center">Learning Guides</Card.Title>
                <Card.Text className="text-center text-muted">
                  Get Guides and Tutorials And Past Questions That Help You
                  Prepare For Proffesional Exams Worldwide
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="card">
              <Card.Img
                variant="top"
                alt="course Image"
                src={require("../assets/img/desk.png")}
                height="200px"
                className="image-fit"
              />
              <Card.Body className="bottom-align">
                <Card.Title className="text-center">
                  Proffesional Help For Tachers
                </Card.Title>
                <Card.Text className="text-center text-muted">
                  Get Help That You Cant Get ElseWhere From Oluko That Help You
                  Become Better Qualified For Teaching Jobs
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="card">
              <Card.Img
                variant="top"
                alt="course Image"
                src={require("../assets/img/lady.png")}
                height="200px"
                className="image-fit"
              />
              <Card.Body className="bottom-align">
                <Card.Title className="text-center">
                  Become Better Qualified
                </Card.Title>
                <Card.Text className="text-center text-muted">
                  Get Help That You Cant Get ElseWhere From Oluko That Help You
                  Become Better Qualified For Teaching Jobs
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="card">
              <Card.Img
                variant="top"
                alt="course Image"
                src={require("../assets/img/writing.png")}
                height="200px"
                className="image-fit"
              />
              <Card.Body className="bottom-align">
                <Card.Title className="text-center">
                  Class Running And Composure{" "}
                </Card.Title>
                <Card.Text className="text-center text-muted">
                  Get Help That You Cant Get ElseWhere From Oluko That Help You
                  Become Better Qualified For Teaching Jobs
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="courses-title">
            <h1>Some Of Our Courses :</h1>
          </div>
          {/* //////////////Why Section End //////////////////// */}

          {courses.map((course) => (
            <CardComponent data={course} key={course.id} />
          ))}
        </div>

        <div className="login-box">
          <div>
            <div className="login-text">
              Sign In
              <br />
              <div className="login-description">
                Login To Be Able To Use Our Services And Access Our Courses
              </div>
            </div>
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
        </div>
      </div>
    </div>
  );
}
