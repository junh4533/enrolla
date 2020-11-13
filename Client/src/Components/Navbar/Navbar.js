import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    // <nav className="Navbar">
    //   <ul>
    //     <Link to="/">
    //       <li>Landing</li>
    //     </Link>
    //     <Link to="/home">
    //       <li>Home</li>
    //     </Link>
    //   </ul>
    // </nav>

    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <a className="navbar-brand" href="#">
        Logo
      </a>

      <ul className="navbar-nav">
        {/* <li className="nav-item">
          <a className="nav-link" href="#">
            Link 1
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link 2
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link 3
          </a>
        </li> */}
        <Link to="/">
          <li className="nav-item">Landing</li>
        </Link>
        <Link to="/home">
          <li className="nav-item">Home</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
