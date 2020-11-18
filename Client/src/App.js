import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Axios from "axios";
import "./App.scss";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LandingPage from "./Pages/LandingPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import Preferences from "./Pages/Preferences";
import ProfilePage from "./Pages/ProfilePage";
import SchedulePage from "./Pages/SchedulePage";
import AdPage from "./Pages/AdPage";
import SqlTest from "./Pages/SqlTest";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={LandingPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/preferences" component={Preferences} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/schedule" component={SchedulePage} />
        <Route path="/sqltest" component={SqlTest} />
        <Route path="/ad" component={AdPage} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
