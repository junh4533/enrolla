import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import Cookies from "js-cookie";
import "./LoginPage.scss";
import logoIcon from "../../assets/images/logo-icon.png";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState("not logged in");

  const LoginQuery = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/api/query/login", {
      username: username,
      password: password,
    })
      .then((response) => {
        if (response.data == "INVALID LOGIN") {
          Cookies.set("user", "invalid");
          setAuthenticated(false);
        } else {
          Cookies.set("user", username);
          setAuthenticated(true);
          window.location = "/student-info";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-page main-content d-flex flex-column justify-content-center">
      {/* ***********START CODING HERE***********  */}

      <div className="container containerlogin d-flex flex-column">
        <img src={logoIcon} id="logo-icon" alt="logo icon" />
        <h1 className="margin3 text-center">Login</h1>
        <div className="rectangle"></div>
        <form onSubmit={LoginQuery}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <button type="submit" className="btn main-button">
            Login
          </button>
        </form>
        {authenticated == false && (
          <p className="text-danger text-center mt-1">
            Incorrect Username or Password
          </p>
        )}
        <div className="container-fluid mt-3">
          <div className="row text-center">
            <div className="col">
              <p className="colorlinks" href="#">
                Create an Account
              </p>
            </div>
            <div className="col">
              <p className="colorlinks">Recover an Account</p>
            </div>
            <div className="col">
              <p className="colorlinks">Login with Google</p>
            </div>
          </div>
        </div>
      </div>

      {/* ***********stop CODING HERE***********  */}
    </div>
  );
};

export default LoginPage;
