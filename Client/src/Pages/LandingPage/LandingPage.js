import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import "./LandingPage.scss";

const LandingPage = () => {
  const [firstName, setFirstName] = useState("");
  const [studentTable, setStudentTable] = useState([]);
  // const TestQuery = () => {
  //   Axios.post("http://localhost:3001/api/query", {
  //     firstName: firstName,
  //   }).then(() => {
  //     alert("success");
  //   });
  // };

  const TestQuery = () => {
    Axios.post("http://localhost:3001/api/query", {
      firstName: firstName,
    })
      .then((response) => {
        console.log(response.data);
        setStudentTable(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // useEffect(() => {
  //   Axios.get("http://localhost:3001/api/query", {
  //     firstName: firstName,
  //   }).then((response) => {
  //     console.log(response.data);
  //   });
  // }, []);
  return (
    <div className="landing-page">
      {/* ***********START CODING HERE***********  */}
      <h1>Landing Page</h1>

      <div className="form">
        <label>Search for student email based on first name</label> <br />
        <input
          type="text"
          name="firstName"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <button onClick={TestQuery}>Submit</button>
        {studentTable.map((key) => {
          return <p>{key.Email}</p>;
        })}
      </div>
      {/* ***********stop CODING HERE***********  */}
    </div>
  );
};

export default LandingPage;
