import React from 'react';
import './App.css';
import NavbarComponent from './includes/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'

function App() {
  return (
    <div className="App">
    <NavbarComponent />
    <Login />
    </div>
  );
}

export default App;
