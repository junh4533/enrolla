import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const UnRegisteredLinks = () => {
  return (
    <React.Fragment>
      <Link to="/">
        <li className="nav-item">Home</li>
      </Link>
      <Link to="/register">
        <li className="nav-item">Register</li>
      </Link>
      <Link to="/login">
        <li className="nav-item">Login</li>
      </Link>
    </React.Fragment>
  );
};

export default UnRegisteredLinks;
