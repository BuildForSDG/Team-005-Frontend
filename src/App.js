import React from 'react';
import './App.css';
import Navbar from './includes/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';

function Apps() {

  return (
    <div className="App">
    <Navbar />
    <Login />
    </div>
  );
}

export default Apps;
