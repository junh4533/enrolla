import React from "react";

const StudentInfoPage = () => {
  return (
    <div className="student-info-page">
      <h1>StudentInfoPage</h1>
      <div className="container">
        <div className="form-group">
          <label>Major:</label>
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
    </div>
  );
};

export default StudentInfoPage;
