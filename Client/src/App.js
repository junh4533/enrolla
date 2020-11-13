import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Axios from "axios";
import "./App.module.scss";
import "./App.scss";
import Navbar from "./Components/Navbar";
import LandingPage from "./Pages/LandingPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={LandingPage} />
        <Route path="/home" component={HomePage} />
      </div>
    </Router>
  );
}

export default App;
