import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const RegisteredLinks = () => {
  const logout = () => {
    Cookies.set("user", "invalid");
    window.location = "/";
  };
  return (
    <React.Fragment>
      <Link to="/student-info">
        <li className="nav-item">Student Info</li>
      </Link>
      <Link to="/preferences">
        <li className="nav-item">Preferences</li>
      </Link>
      <Link to="/profile">
        <li className="nav-item">Profile</li>
      </Link>
      <Link to="/">
        <li className="nav-item" onClick={logout}>
          Logout
        </li>
      </Link>
    </React.Fragment>
  );
};

export default RegisteredLinks;
