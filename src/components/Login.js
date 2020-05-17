import React, { useState } from "react";
import { Image, InputGroup, FormControl, Button, Card } from "react-bootstrap";
import banner from "../assets/img/Banner.svg";
import CardComponent from "../includes/CardComponent";
import courses from "./data.js";
import LoginComponent from "../includes/LoginComponent";
import RegisterComponent from "../includes/RegisterComponent";

export default function Login() {
  const isLoginActive = false;

  function handleFormState() {
    if (this.isLoginActive === true) return <LoginComponent />;
    else return <RegisterComponent />
  }

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
              <div className="switchers">
                <Button className="switcher">Login</Button>
                <Button className="switcher">Signup</Button>
              </div>
              <div className="login-description">
                Login To Be Able To Use Our Services And Access Our Courses
              </div>
            </div>
            {handleFormState}
            <LoginComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
