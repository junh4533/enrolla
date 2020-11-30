import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import Cookies from "js-cookie";
import "./StudentInfoPage.scss";

const StudentInfoPage = () => {
  const [courseList, setCourseList] = useState([]);
  const [credits, setCredits] = useState("");
  const [major, setMajor] = useState("");
  const [minor, setMinor] = useState("");
  const [coursesTaken, setCoursesTaken] = useState([]);
  const username = Cookies.get("user");

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

  const InsertStudentInfo = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/api/query/student-info", {
      major: major,
      minor: minor,
      credits: credits,
      username: username,
      coursesTaken: coursesTaken,
      // withCredentials: true,
    })
      .then((response) => {
        console.log(response.data);
        window.location = "/preferences";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="student-info-page main-content d-flex flex-column justify-content-center">
      <h1 className="margin4h1 text-center">Your Information</h1>
      <h5 className="margin4h5 text-center">
        Fill out a couple of quick questions about your student status.
      </h5>
      <div className="rectangle"></div>
      <div className="container">
        <form onSubmit={InsertStudentInfo}>
          <div className="form-group">
            <label>Major:</label>
            <br />
            <select
              className="custom-select"
              onChange={(e) => {
                setMajor(e.target.value);
              }}
              required
            >
              <option disabled selected value="">
                -- select an option --
              </option>
              <option value="CIS">Computer Information Systems</option>
              <option value="PAF">Public Affairs</option>
              <option value="ECO">Economics</option>
            </select>
          </div>
          <div className="form-group">
            <label>Minor:</label>
            <br />
            <select
              className="custom-select"
              onChange={(e) => {
                setMinor(e.target.value);
              }}
              required
            >
              <option disabled selected value="">
                -- select an option --
              </option>
              <option value="Art">Art</option>
              <option value="Psychology">Psychology</option>
            </select>
          </div>
          <div className="form-group">
            <label>How many credits do you have?</label>
            <input
              type="number"
              className="form-control"
              name="credits"
              onChange={(e) => {
                setCredits(e.target.value);
              }}
              max="256"
              min="0"
              required
            />
          </div>
          <div className="form-group">
            <label>Courses Taken:</label>
            <br />
            <select
              className="custom-select"
              id="courses"
              name="courses"
              multiple
              required
              onChange={(e) => {
                const values = [...e.target.selectedOptions].map((opt) =>
                  String(opt.value)
                );
                setCoursesTaken(values);
                console.log(values);
              }}
            >
              {courseList.map((val) => {
                return (
                  <option value={val.Course_Name}>{val.Course_Name}</option>
                );
              })}
            </select>
          </div>
          <button type="submit" className="btn main-button">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentInfoPage;
