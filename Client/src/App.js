import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Axios from "axios";
import "./App.scss";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LandingPage from "./Pages/LandingPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import StudentInfo from "./Pages/StudentInfoPage";
import Preferences from "./Pages/Preferences";
import ProfilePage from "./Pages/ProfilePage";
import AdPage from "./Pages/AdPage";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={LandingPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/ad" component={AdPage} />
        <Route path="/login" component={LoginPage} />
        <ProtectedRoute path="/student-info" component={StudentInfo} />
        <ProtectedRoute path="/preferences" component={Preferences} />
        <ProtectedRoute path="/profile" component={ProfilePage} />
        {/* <ProtectedRoute path="/ad" component={AdPage} /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
