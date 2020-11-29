import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import Cookies from "js-cookie";
import "./Preferences.scss";
const Preferences = () => {
  const [courseList, setCourseList] = useState([]);
  const [coursesToTake, setCoursesToTake] = useState([]);
  const [credits, setCredits] = useState("");
  const [monday, setMonday] = useState({});
  const [tuesday, setTuesday] = useState({});
  const [wednesday, setWednesday] = useState({});
  const [thursday, setThursday] = useState({});
  const [friday, setFriday] = useState({});
  const [saturday, setSaturday] = useState({});
  const [sunday, setSunday] = useState({});
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
  const handleCheckbox = (element) => {
    element.onchange = function () {
      if (element.checked) {
        element.nextElementSibling.getElementsByTagName(
          "input"
        )[0].disabled = false;
        element.nextElementSibling.nextElementSibling.getElementsByTagName(
          "input"
        )[0].disabled = false;
        element.nextElementSibling.nextElementSibling.nextElementSibling.getElementsByTagName(
          "input"
        )[0].disabled = false;
        element.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.getElementsByTagName(
          "input"
        )[0].disabled = false;
      } else {
        element.nextElementSibling.getElementsByTagName(
          "input"
        )[0].disabled = true;
        element.nextElementSibling.nextElementSibling.getElementsByTagName(
          "input"
        )[0].disabled = true;
        element.nextElementSibling.nextElementSibling.nextElementSibling.getElementsByTagName(
          "input"
        )[0].disabled = true;
        element.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.getElementsByTagName(
          "input"
        )[0].disabled = true;
      }
    };
  };

  const PreferencesQuery = (e) => {
    e.PreventDefault();
    Axios.post("http://localhost:3001/api/query/preferences", {
      credits: credits,
      coursesToTake: coursesToTake,
      monday: monday,
      tuesday: tuesday,
      wednesday: wednesday,
      thursday: thursday,
      friday: friday,
      saturday: saturday,
      sunday: sunday,
      username: username,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="preferences-page main-content">
      {/* ***********START CODING HERE***********  */}
      <h1 className="margin4h1 text-center">Your Schedule Preferences</h1>
      <h5 className="margin4h5 text-center">
        Plug in your answers in the fields below so we can generate a custom
        schedule for you.
      </h5>
      <div className="rectangle"></div>
      <div className="container containerpref">
        <form onSubmit={PreferencesQuery}>
          <div className="form-group">
            <div className="input-group mb-3">
              <label className="d-block">Courses You Would Like to Take:</label>
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
                required
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
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={(e) => {
                  handleCheckbox(e.target);
                }}
              />
              Mondays
              <div className="form-group">
                <label>From:</label>
                <input
                  type="time"
                  name="monday-start"
                  onBlur={(e) => {
                    setMonday((prevState) => ({
                      start: e.target.value,
                      ...prevState,
                    }));
                  }}
                  disabled
                />
              </div>
              <div className="form-group">
                <label>To:</label>
                <input
                  type="time"
                  name="monday-end"
                  onBlur={(e) => {
                    setMonday((prevState) => ({
                      ...prevState,
                      end: e.target.value,
                    }));
                  }}
                  disabled
                />
              </div>
              Excluding
              <div className="form-group">
                <label>From:</label>
                <input
                  type="time"
                  name="monday-start"
                  onBlur={(e) => {
                    setMonday((prevState) => ({
                      excludingStart: e.target.value,
                      ...prevState,
                    }));
                  }}
                  disabled
                />
              </div>
              <div className="form-group">
                <label>To:</label>
                <input
                  type="time"
                  name="monday-end"
                  onBlur={(e) => {
                    setMonday((prevState) => ({
                      ...prevState,
                      excludingEnd: e.target.value,
                    }));
                  }}
                  disabled
                />
              </div>
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      {/* ***********stop CODING HERE***********  */}
    </div>
  );
};
export default Preferences;
