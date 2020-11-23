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
      <div class="container-fluid bg-1 text-center">
        <h1 class="margin1">Worry less about planning for school with Enrolla.</h1>
        <h4>Enrolla will automatically generate a class schedule for you, based on your personal time constraints, subject preferences, and graduation requirements.</h4>
        <a href="#" class="button">Sign Up Now</a>
      </div>

      <div class="container-fluid bg-2 text-center">
        <h3 class="margin2 lavendar">Benefits</h3>
        <div class="rectangle margin2"></div>

        <p>🗸  Keeps you on track for graduation</p>
        <p>🗸  Make your life easier as a college student</p>
        <p>🗸  Remove the pains of planning for next semester</p>
      </div>
      {/* ***********stop CODING HERE***********  */}
    </div>
  );
};

export default LandingPage;
