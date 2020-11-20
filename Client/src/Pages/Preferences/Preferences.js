import React from "react";
import "./Preferences.scss";

const Preferences = () => {
  return (
    <div className="preferences-page">
      {/* ***********START CODING HERE***********  */}
      <h1>Preferences Page</h1>
      <div className="container">
        <div className="form-group">
          <label>
            Select all the courses you’d like to take for the semester:
          </label>
          <select id="major" name="major" multiple>
            <option value="CIS">Computer Information Systems</option>
            <option value="PAF">Public Affairs</option>
            <option value="ECO">Economics</option>
          </select>
        </div>
        <div className="form-group">
          <label>Minor:</label>
          <select id="minor" name="minor" multiple>
            <option value="ART">Art</option>
            <option value="THE">Theater</option>
          </select>
        </div>
        <div className="form-group">
          <label>Courses Taken:</label>
          <select id="courses" name="courses" multiple>
            <option value="CIS2300">CIS 2300</option>
            <option value="CIS3100">CIS 3100</option>
            <option value="CIS3400">CIS 3400</option>
            <option value="CIS5800">CIS 5800</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      {/* ***********stop CODING HERE***********  */}
    </div>
  );
};

export default Preferences;
