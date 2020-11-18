import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-component">
      {/* ***********START CODING HERE***********  */}
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" href="#">
          Logo
        </a>

        <ul className="navbar-nav">
          <Link to="/">
            <li className="nav-item">Landing</li>
          </Link>
          <Link to="/home">
            <li className="nav-item">Home</li>
          </Link>
          <Link to="/profile">
            <li className="nav-item">Profile</li>
          </Link>
          <Link to="/schedule">
            <li className="nav-item">Schedule</li>
          </Link>
          <Link to="/preferences">
            <li className="nav-item">Preferences</li>
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
