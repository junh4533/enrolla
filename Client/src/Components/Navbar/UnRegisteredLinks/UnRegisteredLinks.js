import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./UnRegisteredLinks.scss";

const UnRegisteredLinks = () => {
  return (
    <React.Fragment>
      <Link to="/register">
        <li className="nav-item btn btn-green">Register</li>
      </Link>
      <Link to="/login">
        <li className="nav-item btn btn-green">Login</li>
      </Link>
    </React.Fragment>
  );
};

export default UnRegisteredLinks;
