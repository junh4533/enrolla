import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import Cookies from "js-cookie";
import "./LoginPage.scss";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const LoginQuery = () => {
    Axios.post("http://localhost:3001/api/query/login", {
      username: username,
      password: password,
    })
      .then((response) => {
        if (response.data == "INVALID LOGIN") {
          Cookies.set("user", "invalid");
        } else {
          Cookies.set("user", username);
          window.location = "/student-info";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-page">
      {/* ***********START CODING HERE***********  */}

      <div className="container containerlogin">
      <h1 className="margin3 text-center">Login</h1>
      <div className="rectangle"></div>  
        {/* <form> */}
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            className="form-control"
            id="usr"
            name="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="text"
            className="form-control"
            id="pwd"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={LoginQuery}>
          Submit
        </button>
        {/* </form> */}
        {Cookies.get("user") != "invalid" ? (
          <h3 className="text-success">Authenticated</h3>
        ) : (
          <h3 className="text-danger">NOT Authenticated</h3>
        )}
        <h3></h3>
      </div>

      <div className="row text-center">
        <div className="extras">
          <p className="colorlinks" href="#">Create an Account</p>
        </div>

        <div className="extras">
          <p className="colorlinks">Recover an Account</p>
        </div>

        <div className="extras">
          <p className="colorlinks">Login with Google</p>
        </div>
      </div>
      {/* ***********stop CODING HERE***********  */}
    </div>
  );
};

export default LoginPage;
