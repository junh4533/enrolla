import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import "./LoginPage.scss";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [credentialsTable, setCredentialsTable] = useState([]);
  const LoginQuery = () => {
    Axios.post("http://localhost:3001/api/query/login", {
      username: username,
      password: password,
    })
      .then((response) => {
        // console.log(response.data);
        // console.log(credentialsTable);
        setCredentialsTable(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login-page">
      {/* ***********START CODING HERE***********  */}
      <h1>Login Page</h1>
      <div className="container">
        {/* <form> */}
        <div className="form-group">
          <label>username:</label>
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
        {credentialsTable.length > 0 ? (
          <h3 className="text-success">Authenticated</h3>
        ) : (
          <h3 className="text-danger">NOT Authenticated</h3>
        )}
        <h3></h3>
      </div>
      {/* ***********stop CODING HERE***********  */}
    </div>
  );
};

export default LoginPage;
