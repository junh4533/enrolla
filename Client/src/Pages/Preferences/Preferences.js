import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import Cookies from "js-cookie";
import "./Preferences.scss";
const Preferences = () => {
  const [courseList, setCourseList] = useState([]);
  const [coursesToTake, setCoursesToTake] = useState([]);
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
    <div className="preferences-page">
      {/* ***********START CODING HERE***********  */}
      <h1 className="margin4h1 text-center">Your Schedule Preferences</h1>
      <h5 className="margin4h5 text-center">Plug in your answers in the fields below so we can generate a custom schedule for you.</h5>
      <div className="rectangle"></div>
      <div className="container containerpref">
        <div className="form-group">
          <div className="input-group mb-3">
            <label className="d-block coursestext">Courses You Would Like to Take: </label>
            <br />
            <select
              className="custom-select"
              id="courses"
              name="courses"
              multiple
              onChange={(e) => {
                const values = [...e.target.selectedOptions].map((opt) =>
                  String(opt.value)
                );
                setCoursesToTake(values);
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
        <div className="form-group">
          <label className="creditstext">How many credits do you have?</label>
          <input
            type="number"
            className="form-control"
            id="credits"
            name="credits"
            // onChange={(e) => {
            //   setPassword(e.target.value);
            // }}
          />
        </div>
        <p className="h5daystext">Select the days and input the time when you are free to take the courses you chose: </p>
        <div className="form-check">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" value="" />
            <label className="daystext">Mondays</label>
            <div className="form-group">
              <label for="usr">From:</label>
              <input type="time" name="appt" />
            </div>
            <div className="form-group">
              <label for="usr">To:</label>
              <input type="time" name="appt" />
            </div>
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" value="" />
            <label className="daystext">Tuesday</label>
            <div className="form-group">
              <label for="usr">From:</label>
              <input type="time" name="appt" />
            </div>
            <div className="form-group">
              <label for="usr">To:</label>
              <input type="time" name="appt" />
            </div>
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" value="" />
            <label className="daystext">Wednesday</label>
            <div className="form-group">
              <label for="usr">From:</label>
              <input type="time" name="appt" />
            </div>
            <div className="form-group">
              <label for="usr">To:</label>
              <input type="time" name="appt" />
            </div>
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" value="" />
            <label className="daystext">Thursday</label>
            <div className="form-group">
              <label for="usr">From:</label>
              <input type="time" name="appt" />
            </div>
            <div className="form-group">
              <label for="usr">To:</label>
              <input type="time" name="appt" />
            </div>
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" value="" />
            <label className="daystext">Friday</label>
            <div className="form-group">
              <label for="usr">From:</label>
              <input type="time" name="appt" />
            </div>
            <div className="form-group">
              <label for="usr">To:</label>
              <input type="time" name="appt" />
            </div>
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" value="" />
            <label className="daystext">Saturday</label>
            <div className="form-group">
              <label for="usr">From:</label>
              <input type="time" name="appt" />
            </div>
            <div className="form-group">
              <label for="usr">To:</label>
              <input type="time" name="appt" />
            </div>
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" value="" />
            <label className="daystext">Sunday</label>
            <div className="form-group">
              <label for="usr">From:</label>
              <input type="time" name="appt" />
            </div>
            <div className="form-group">
              <label for="usr">To:</label>
              <input type="time" name="appt" />
            </div>
          </label>
        </div>
        <div className="centerbutton">
        <button type="submit" className="btn btn-primary prefbutton">
          Submit
        </button>
        </div>
      </div>
      {/* ***********stop CODING HERE***********  */}
    </div>
  );
};
export default Preferences;
