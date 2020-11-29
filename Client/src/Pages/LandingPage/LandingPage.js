import React, { Component, useState, useEffect } from "react";
// import Axios from "axios";
import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <div className="landing-page main-content">
      {/* ***********START CODING HERE***********  */}
      <div className="bgholder bgpurple text-center">
        <h1 className="margin1">
          Worry less about planning for school with Enrolla.
        </h1>
        <h5>
          Enrolla will automatically generate a class schedule for you, based on
          your personal time constraints, subject preferences, and graduation
          requirements.
        </h5>
        <a href="/register" className="button main-button">
          Sign Up Now
        </a>
      </div>

      <div className="bgholder bgwhite text-center">
        <h3 className="margin2 lavendar">Benefits</h3>
        <div className="rectangle margin2"></div>
        <p>🗸 Keeps you on track for graduation</p>
        <p>🗸 Make your life easier as a college student</p>
        <p>🗸 Remove the pains of planning for next semester</p>
      </div>
      {/* ***********stop CODING HERE***********  */}
    </div>
  );
};
export default LandingPage;
