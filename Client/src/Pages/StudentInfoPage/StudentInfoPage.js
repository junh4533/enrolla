import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import Cookies from "js-cookie";

const StudentInfoPage = () => {
  const [courseList, setCourseList] = useState([]);
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
    <div className="student-info-page main-content">
      <h1>StudentInfoPage</h1>
      <div className="container">
        <form onSubmit={InsertStudentInfo}>
          <div className="form-group">
            <div className="input-group mb-3">
              <label className="d-block">Major:</label>
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
          </div>
          <div className="form-group">
            <div className="input-group mb-3">
              <label className="d-block">Minor:</label>
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
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentInfoPage;
