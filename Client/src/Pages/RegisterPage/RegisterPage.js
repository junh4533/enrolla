import React from "react";
import "./RegisterPage.scss";

const RegisterPage = () => {
  return (
    <div className="register-page">
      {/* ***********START CODING HERE***********  */}
      <h1>Register Page</h1>
      <div className="container">
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" className="form-control" id="fname" />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" className="form-control" id="lname" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label>EMPLID:</label>
          <input type="number" className="form-control" id="emplid" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" id="usr" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" id="pwd" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      {/* ***********stop CODING HERE***********  */}
    </div>
  );
};

export default RegisterPage;
