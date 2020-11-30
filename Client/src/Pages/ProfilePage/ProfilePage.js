import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import Cookies from "js-cookie";
import moment from "moment";
import "./ProfilePage.scss";
import userIcon from "../../assets/images/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCalendar } from "@fortawesome/free-regular-svg-icons";

let _ = require("underscore");

const ProfilePage = () => {
  const [studentInfo, setStudentInfo] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [recommendedClasses, setRecommendedClasses] = useState([]);
  const username = Cookies.get("user");
  const [availableDays, setAvailableDays] = useState([]);
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  useEffect(() => {
    const getProfile = Axios.get("http://localhost:3001/api/query/profile", {
      params: {
        username: username,
      },
    })
      .then((response) => {
        setStudentInfo(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    const getSections = Axios.get(
      "http://localhost:3001/api/query/all-sections",
      {
        params: {
          username: username,
        },
      }
    )
      .then((response) => {
        setAllCourses(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    Promise.all([getProfile, getSections]);
  }, []);

  const generateSchedule = () => {
    let courseFilter = allCourses;
    let days = [];
    let timeslots = [];

    studentInfo.map((student) => {
      setAvailableDays([
        student.Monday,
        student.Tuesday,
        student.Wednesday,
        student.Thursday,
        student.Friday,
        student.Saturday,
        student.Sunday,
      ]);

      availableDays.map((day, index) => {
        JSON.stringify(day) != "{}" && days.push(index + 1);
        timeslots.push(day);
        console.log(timeslots);
      });

      allCourses.map((course) => {
        // filters classes based on taken classes
        student["Taken Classes"].map((takenClass) => {
          courseFilter = courseFilter.filter(
            (item) => item.Course_Name != takenClass
          );
        });
      });

      // filters classes based on preferences
      courseFilter = courseFilter.filter((course) =>
        student.course_Preference.includes(course.Course_Name)
      );

      // filters classes based on core requirements
      courseFilter = courseFilter.filter(
        (course) =>
          course.Required_majors == student.Major_Name || course.Core_Req == 0
      );

      // filters classes based on DAYS
      courseFilter = courseFilter.filter((course) => {
        return days.some((day) => {
          if (_.values(course.Class_Day).includes(day)) {
            return true;
          }
        });
      });

      // filters classes based on TIMESLOTS
      courseFilter = courseFilter.filter((course) => {
        return timeslots.some((timeslot) => {
          if (
            timeslot.start <= course.Class_Start_Time &&
            timeslot.end >= course.Class_End_Time &&
            (timeslot.excludingStart >= course.Class_End_Time ||
              timeslot.excludingEnd <= course.Class_Start_Time)
          ) {
            return true;
          }
        });
      });
    });

    console.log(courseFilter);
    setRecommendedClasses(courseFilter);
  };

  const test = () => {
    // let days = [];
    // availableDays.map((day, index) => {
    //   JSON.stringify(day) != "{}" && days.push(index + 1);
    // });
    // console.log(days);
    // console.log(availableDays);
  };

  return (
    <div className="profile-page main-content">
      {/* ***********START CODING HERE***********  */}
      {studentInfo.map((student) => {
        const creditProgressWidth = () => {
          return {
            width:
              (student.Current_Credits / student.Degree_Credit) * 100 + "%",
          };
        };
        const courseProgressWidth = () => {
          return { width: (student["Taken Classes"].length / 4) * 100 + "%" };
        };

        return (
          <div className="container py-5">
            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="d-flex flex-column" id="user-summary-column">
                  <div className="text-center">
                    <img src={userIcon} />
                    <h3>{student.First_Name}</h3>
                  </div>
                  <div id="user-summary">
                    <p>{student.Major_Name}</p>
                    <p className="font-italic">{student.Degree}</p>
                    <p className="progress-text">
                      {student.Current_Credits}/{student.Degree_Credit} Credits
                      Completed
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        id="creditProgress"
                        style={creditProgressWidth()}
                      ></div>
                    </div>
                    <p className="progress-text">
                      {student["Taken Classes"].length}/4 Major Courses
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        id="courseProgress"
                        style={courseProgressWidth()}
                      ></div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn main-button mt-3 w-100"
                    onClick={generateSchedule}
                  >
                    Find Classes
                  </button>
                </div>
              </div>
              <div className="col-12 col-lg-8">
                <h1 className="mb-3">Recommended Classes</h1>
                <div id="coursesContainer">
                  <ul className="list-group">
                    {recommendedClasses.map((course) => {
                      return (
                        <li className="list-group-item">
                          <h4>{course.Course_Name}</h4>
                          <p>Section: {course.Classes_Section}</p>
                          <p>
                            <FontAwesomeIcon icon={faCalendar} />{" "}
                            {course.Class_Day.map((day, index) => {
                              return (
                                <span>
                                  {daysOfWeek[course.Class_Day[index] - 1]}{" "}
                                </span>
                              );
                            })}
                            {/* {} &{" "}
                            {daysOfWeek[course.Class_Day[1] - 1]} */}
                          </p>
                          <p>
                            <FontAwesomeIcon icon={faClock} />{" "}
                            {moment(course.Class_Start_Time, "HH:mm:ss").format(
                              "h:mm:ss A"
                            )}{" "}
                            -{" "}
                            {moment(course.Class_End_Time, "HH:mm:ss").format(
                              "h:mm:ss A"
                            )}
                          </p>
                          <b>
                            {course.Core_Req ? (
                              <p>
                                <span className="text-success">REQUIRED </span>
                                for your major
                              </p>
                            ) : (
                              <p>
                                <span className="text-secondary">
                                  NOT REQUIRED{" "}
                                </span>
                                for your major
                              </p>
                            )}
                          </b>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* ***********stop CODING HERE***********  */}
    </div>
  );
};

export default ProfilePage;
