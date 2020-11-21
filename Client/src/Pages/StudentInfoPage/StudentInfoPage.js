import React, { Component, useState, useEffect } from "react";
import Axios from "axios";

const StudentInfoPage = () => {
  const [courseList, setCourseList] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/api/query/course-list")
      .then((response) => {
        setCourseList(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="student-info-page">
      <h1>StudentInfoPage</h1>
      <div className="container">
        <div className="form-group">
          <div className="input-group mb-3">
            <label className="d-block">Major:</label>
            <br />
            <select className="custom-select">
              <option value="CIS">Computer Information Systems</option>
              <option value="PAF">Public Affairs</option>
              <option value="ECO">Economics</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="input-group mb-3">
            <label className="d-block">Minor:</label>
            <br />
            <select className="custom-select">
              <option value="Art">Art</option>
              <option value="Psychology">Psychology</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="input-group mb-3">
            <label className="d-block">Courses Taken:</label>
            <br />
            <select
              className="custom-select"
              id="courses"
              name="courses"
              multiple
            >
              {courseList.map((val) => {
                return (
                  <option value={val.Course_Name}>{val.Course_Name}</option>
                );
              })}
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
};

export default StudentInfoPage;
