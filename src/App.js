import React from "react";
import "./App.css";
import NavbarComponent from "./includes/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
      <Router>
          <NavbarComponent />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
  );
}

export default App;
