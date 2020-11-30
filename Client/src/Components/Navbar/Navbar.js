import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./Navbar.scss";
import RegisteredLinks from "./RegisteredLinks";
import UnRegisteredLinks from "./UnRegisteredLinks";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar-component">
      {/* ***********START CODING HERE***********  */}
      <nav className="navbar navbar-expand-sm navbar-dark">
        <a className="navbar-brand" href="/">
          <img src={logo} />
        </a>
        <ul className="navbar-nav ml-auto">
          {Cookies.get("user") != "invalid" ? (
            <RegisteredLinks />
          ) : (
            <UnRegisteredLinks />
          )}
        </ul>
      </nav>
      {/* ***********stop CODING HERE***********  */}
    </div>
  );
};

export default Navbar;
