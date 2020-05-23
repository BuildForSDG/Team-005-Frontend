import React, { Component } from "react";
import homeHeaderImg from '../assets/img/download.jpeg'

class Home extends Component {
  state = {};
  render() {
    return (
    <div>
        <div className="header">
            <img className="headerImg" src={homeHeaderImg} alt="logo-img"/>
        </div>
    </div>
    )
  }
}

export default Home;
