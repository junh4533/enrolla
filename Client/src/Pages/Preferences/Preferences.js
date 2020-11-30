import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import Cookies from "js-cookie";
import "./Preferences.scss";

const Preferences = () => {
  const [courseList, setCourseList] = useState([]);
  const [coursesToTake, setCoursesToTake] = useState([]);
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

  const PreferencesQuery = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/api/query/preferences", {
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

  const TimeslotField = (props) => {
    return (
      <div className="col">
        <h5>{props.day}</h5>
        <div className="form-group mt-4">
          <label>From:</label>
          <input
            className="form-control"
            type="time"
            onBlur={props.setStart}
            defaultValue={props.state.start}
          />
        </div>
        <div className="form-group mb-3">
          <label>To:</label>
          <input
            className="form-control"
            type="time"
            onBlur={props.setEnd}
            defaultValue={props.state.end}
          />
        </div>
        <b>Exclude</b>
        <div className="form-group">
          <label>From:</label>
          <input
            className="form-control"
            type="time"
            onBlur={props.setExcludingStart}
            defaultValue={props.state.excludingStart}
          />
        </div>
        <div className="form-group">
          <label>To:</label>
          <input
            className="form-control"
            type="time"
            onBlur={props.setExcludingEnd}
            defaultValue={props.state.excludingEnd}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="preferences-page main-content">
      {/* ***********START CODING HERE***********  */}
      <h1 className="margin4h1 text-center">Your Schedule Preferences</h1>
      <h5 className="margin4h5 text-center">
        Tell us your schedule so we can find classes for you.
      </h5>
      <div className="rectangle"></div>
      <div className="container-fluid p-5">
        <form onSubmit={PreferencesQuery}>
          <div className="form-group">
            <label>Courses You Would Like to Take:</label>
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
          <div className="container-fluid">
            <div className="row">
              <TimeslotField
                day="Monday"
                state={monday}
                setStart={(e) => {
                  setMonday((prevState) => ({
                    ...prevState,
                    start: e.target.value,
                  }));
                }}
                setEnd={(e) => {
                  setMonday((prevState) => ({
                    ...prevState,
                    end: e.target.value,
                  }));
                }}
                setExcludingStart={(e) => {
                  setMonday((prevState) => ({
                    ...prevState,
                    excludingStart: e.target.value,
                  }));
                }}
                setExcludingEnd={(e) => {
                  setMonday((prevState) => ({
                    ...prevState,
                    excludingEnd: e.target.value,
                  }));
                }}
              />

              <TimeslotField
                day="Tuesday"
                state={tuesday}
                setStart={(e) => {
                  setTuesday((prevState) => ({
                    ...prevState,
                    start: e.target.value,
                  }));
                }}
                setEnd={(e) => {
                  setTuesday((prevState) => ({
                    ...prevState,
                    end: e.target.value,
                  }));
                }}
                setExcludingStart={(e) => {
                  setTuesday((prevState) => ({
                    ...prevState,
                    excludingStart: e.target.value,
                  }));
                }}
                setExcludingEnd={(e) => {
                  setTuesday((prevState) => ({
                    ...prevState,
                    excludingEnd: e.target.value,
                  }));
                }}
              />

              <TimeslotField
                day="Wednesday"
                state={wednesday}
                setStart={(e) => {
                  setWednesday((prevState) => ({
                    ...prevState,
                    start: e.target.value,
                  }));
                }}
                setEnd={(e) => {
                  setWednesday((prevState) => ({
                    ...prevState,
                    end: e.target.value,
                  }));
                }}
                setExcludingStart={(e) => {
                  setWednesday((prevState) => ({
                    ...prevState,
                    excludingStart: e.target.value,
                  }));
                }}
                setExcludingEnd={(e) => {
                  setWednesday((prevState) => ({
                    ...prevState,
                    excludingEnd: e.target.value,
                  }));
                }}
              />

              <TimeslotField
                day="Thursday"
                state={thursday}
                setStart={(e) => {
                  setThursday((prevState) => ({
                    ...prevState,
                    start: e.target.value,
                  }));
                }}
                setEnd={(e) => {
                  setThursday((prevState) => ({
                    ...prevState,
                    end: e.target.value,
                  }));
                }}
                setExcludingStart={(e) => {
                  setThursday((prevState) => ({
                    ...prevState,
                    excludingStart: e.target.value,
                  }));
                }}
                setExcludingEnd={(e) => {
                  setThursday((prevState) => ({
                    ...prevState,
                    excludingEnd: e.target.value,
                  }));
                }}
              />

              <TimeslotField
                day="Friday"
                state={friday}
                setStart={(e) => {
                  setFriday((prevState) => ({
                    ...prevState,
                    start: e.target.value,
                  }));
                }}
                setEnd={(e) => {
                  setFriday((prevState) => ({
                    ...prevState,
                    end: e.target.value,
                  }));
                }}
                setExcludingStart={(e) => {
                  setFriday((prevState) => ({
                    ...prevState,
                    excludingStart: e.target.value,
                  }));
                }}
                setExcludingEnd={(e) => {
                  setFriday((prevState) => ({
                    ...prevState,
                    excludingEnd: e.target.value,
                  }));
                }}
              />

              <TimeslotField
                day="Saturday"
                state={saturday}
                setStart={(e) => {
                  setSaturday((prevState) => ({
                    ...prevState,
                    start: e.target.value,
                  }));
                }}
                setEnd={(e) => {
                  setSaturday((prevState) => ({
                    ...prevState,
                    end: e.target.value,
                  }));
                }}
                setExcludingStart={(e) => {
                  setSaturday((prevState) => ({
                    ...prevState,
                    excludingStart: e.target.value,
                  }));
                }}
                setExcludingEnd={(e) => {
                  setSaturday((prevState) => ({
                    ...prevState,
                    excludingEnd: e.target.value,
                  }));
                }}
              />

              <TimeslotField
                day="Sunday"
                state={sunday}
                setStart={(e) => {
                  setSunday((prevState) => ({
                    ...prevState,
                    start: e.target.value,
                  }));
                }}
                setEnd={(e) => {
                  setSunday((prevState) => ({
                    ...prevState,
                    end: e.target.value,
                  }));
                }}
                setExcludingStart={(e) => {
                  setSunday((prevState) => ({
                    ...prevState,
                    excludingStart: e.target.value,
                  }));
                }}
                setExcludingEnd={(e) => {
                  setSunday((prevState) => ({
                    ...prevState,
                    excludingEnd: e.target.value,
                  }));
                }}
              />
            </div>
          </div>

          <button type="submit" className="btn main-button">
            Next
          </button>
        </form>
      </div>
      {/* ***********stop CODING HERE***********  */}
    </div>
  );
};
export default Preferences;
