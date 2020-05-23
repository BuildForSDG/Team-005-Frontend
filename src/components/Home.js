import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'



class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="header">
          <div className="header-left-side">
              <h2 className="header-title">Learn How To Become a Better Teacher With Olukọ</h2>
              <Link to='/'>
                  <Button>
                        Level Up!
                  </Button>
              </Link>
          </div>
          <div className="header-right-side">
              <div className="image-1"></div>
              <div className="image-2"></div>
              <div className="image-3"></div>
          </div>
        </div>


        {/* //////////////Main Content////////////////// */}
        <div className="main-content"></div>
      </div>
    );
  }
}

export default Home;
