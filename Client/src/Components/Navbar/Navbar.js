import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import RegisteredLinks from "./RegisteredLinks";
import UnRegisteredLinks from "./UnRegisteredLinks";

const Navbar = () => {
  return (
    <div className="navbar-component">
      {/* ***********START CODING HERE***********  */}
      <nav className="navbar navbar-expand-sm navbar-dark">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        <ul className="navbar-nav ml-auto">
          <Link to="/">
            <li className="nav-item">Landing</li>
          </Link>
          <Link to="/register">
            <li className="nav-item">Register</li>
          </Link>
          <Link to="/login">
            <li className="nav-item">Login</li>
          </Link>
          <Link to="/student-info">
            <li className="nav-item">Student Info</li>
          </Link>
          <Link to="/preferences">
            <li className="nav-item">Preferences</li>
          </Link>
          <Link to="/profile">
            <li className="nav-item">Profile</li>
          </Link>
          <Link to="/sqltest">
            <li className="nav-item">SQL Test</li>
          </Link>
        </ul>
      </nav>
      {/* ***********stop CODING HERE***********  */}
    </div>
  );
};

export default Navbar;
