import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import Cookies from "js-cookie";
import "./Preferences.scss";
const Preferences = () => {
  const [courseList, setCourseList] = useState([]);
  const [coursesToTake, setCoursesToTake] = useState([]);
  const [credits, setCredits] = useState("");
  // const [days, setDays] = useState([]);
  // const [hours, setHours] = useState({
  //   start: "",
  //   end: ""
  // });

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
      } else {
        element.nextElementSibling.getElementsByTagName(
          "input"
        )[0].disabled = true;
        element.nextElementSibling.nextElementSibling.getElementsByTagName(
          "input"
        )[0].disabled = true;
      }
    };
  };

  const PreferencesQuery = () => {
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
      // days: days,
      // hours: hours,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="preferences-page">
      {/* ***********START CODING HERE***********  */}
      <h1>Preferences Page</h1>
      <div className="container">
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
          </label>
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
            Tuesday
            <div className="form-group">
              <label>From:</label>
              <input
                type="time"
                name="tuesday-start"
                disabled
                onBlur={(e) => {
                  setTuesday((prevState) => ({
                    start: e.target.value,
                    ...prevState,
                  }));
                }}
              />
            </div>
            <div className="form-group">
              <label>To:</label>
              <input
                type="time"
                name="tuesday-end"
                disabled
                onBlur={(e) => {
                  setTuesday((prevState) => ({
                    end: e.target.value,
                    ...prevState,
                  }));
                }}
              />
            </div>
          </label>
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
            Wednesday
            <div className="form-group">
              <label>From:</label>
              <input type="time" name="wednesday-start" disabled />
            </div>
            <div className="form-group">
              <label>To:</label>
              <input type="time" name="wednesday-end" disabled />
            </div>
          </label>
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
            Thursday
            <div className="form-group">
              <label>From:</label>
              <input type="time" name="thursday-start" disabled />
            </div>
            <div className="form-group">
              <label>To:</label>
              <input type="time" name="thursday-end" disabled />
            </div>
          </label>
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
            Friday
            <div className="form-group">
              <label>From:</label>
              <input type="time" name="friday-start" disabled />
            </div>
            <div className="form-group">
              <label>To:</label>
              <input type="time" name="friday-end" disabled />
            </div>
          </label>
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
            Saturday
            <div className="form-group">
              <label>From:</label>
              <input type="time" name="saturday-start" disabled />
            </div>
            <div className="form-group">
              <label>To:</label>
              <input type="time" name="saturday-end" disabled />
            </div>
          </label>
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
            Sunday
            <div className="form-group">
              <label>From:</label>
              <input type="time" name="sunday-start" disabled />
            </div>
            <div className="form-group">
              <label>To:</label>
              <input type="time" name="sunday-end" disabled />
            </div>
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={PreferencesQuery}
        >
          Submit
        </button>
      </div>
      {/* ***********stop CODING HERE***********  */}
    </div>
  );
};
export default Preferences;
