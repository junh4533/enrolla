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

  const RegisterQuery = () => {
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
    <div className="register-page">
      {/* ***********START CODING HERE***********  */}
      <h1>Register Page</h1>
      <div className="container">
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
            type="text"
            className="form-control"
            name="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={RegisterQuery}
        >
          Submit
        </button>
      </div>
      {/* ***********stop CODING HERE***********  */}
    </div>
  );
};

export default RegisterPage;
