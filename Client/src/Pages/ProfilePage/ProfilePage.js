import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import Cookies from "js-cookie";
import "./ProfilePage.scss";
import userIcon from "../../assets/images/user.png";

let _ = require("underscore");

const ProfilePage = () => {
  const [studentInfo, setStudentInfo] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [recommendedClasses, setRecommendedClasses] = useState([]);
  const username = Cookies.get("user");
  const [availableDays, setAvailableDays] = useState([]);

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

        // let courseFilter = allCourses;
        // studentInfo.map((student) => {
        //     student.Monday

        //   allCourses.map((course) => {
        //     // filters classes based on taken classes
        //     student["Taken Classes"].map((takenClass) => {
        //       courseFilter = courseFilter.filter(
        //         (item) => item.Course_Name != takenClass
        //       );
        //     });
        //   });

        //   // filters classes based on preferences
        //   courseFilter = courseFilter.filter((element) =>
        //     student.course_Preference.includes(element.Course_Name)
        //   );
        // });

        // setRecommendedClasses(courseFilter);
      })
      .catch((error) => {
        console.log(error);
      });

    Promise.all([getProfile, getSections]);
  }, []);

  const generateSchedule = () => {
    let courseFilter = allCourses;
    let days = [];

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
      courseFilter = courseFilter.filter((element) =>
        student.course_Preference.includes(element.Course_Name)
      );

      // filters classes based on core requirements
      courseFilter = courseFilter.filter(
        (element) =>
          element.Required_majors == student.Major_Name || element.Core_Req == 1
      );

      // filters classes based on DAYS
      courseFilter = courseFilter.filter((element) => {
        return days.some((day) => {
          if (_.values(element.Class_Day).includes(day)) {
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
    <div className="profile-page">
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
          <div className="container my-5">
            <div className="row">
              <div className="col-12 col-lg-4" id="user-summary-column">
                <div className="text-center">
                  <img src={userIcon} />
                  <h3>User</h3>
                </div>
                <div className="" id="user-summary">
                  <p>{student.Degree}</p>
                  <p>{student.Major_Name}</p>
                  <p>
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
                  <p>{student["Taken Classes"].length}/4 Major Courses</p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      id="courseProgress"
                      style={courseProgressWidth()}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8">
                <button onClick={generateSchedule}>Generate Schedule</button>
                <button onClick={test}>Test</button>
                <h1>Recommended Classes</h1>
                {recommendedClasses.map((course) => {
                  return (
                    <ul class="list-group">
                      <li class="list-group-item">
                        <p>{course.Course_Name}</p>
                        <p>{course.Classes_Section}</p>
                      </li>
                    </ul>
                  );
                })}
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
