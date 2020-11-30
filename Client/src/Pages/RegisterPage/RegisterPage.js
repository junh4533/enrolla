import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import "./RegisterPage.scss";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [emplid, setEmplid] = useState("");

  const RegisterQuery = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/api/query/registration", {
      username: username,
      password: password,
      fname: fname,
      lname: lname,
      email: email,
      emplid: emplid,
    })
      .then((response) => {
        console.log(response.data);
        window.location = "/login";
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="register-page main-content">
      {/* ***********START CODING HERE***********  */}
      <h1 className="margin4h1 text-center">Register</h1>
      <h5 className="margin4h5 text-center">
        Tell us your schedule so we can find classes for you.
      </h5>
      <div className="rectangle"></div>
      <div className="container">
        <form onSubmit={RegisterQuery}>
          <div class="row">
            <div class="col">
              <div className="form-group">
                <label>First Name:</label>
                <input
                  type="text"
                  className="form-control"
                  name="fname"
                  id="fname"
                  onChange={(e) => {
                    setFName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div class="col">
              <div className="form-group">
                <label>Last Name:</label>
                <input
                  type="text"
                  className="form-control"
                  name="lname"
                  id="lname"
                  onChange={(e) => {
                    setLName(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>EMPLID:</label>
            <input
              type="number"
              className="form-control"
              name="emplid"
              id="emplid"
              onChange={(e) => {
                setEmplid(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              className="form-control"
              name="username"
              id="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn main-button">
            Login
          </button>
        </form>
      </div>
      {/* ***********stop CODING HERE***********  */}
    </div>
  );
};

export default RegisterPage;
