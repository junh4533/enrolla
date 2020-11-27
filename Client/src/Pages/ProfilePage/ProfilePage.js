import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import Cookies from "js-cookie";
import "./ProfilePage.scss";
import userIcon from "../../assets/images/user.png";

const ProfilePage = () => {
  const [studentInfo, setStudentInfo] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [recommendedClasses, setRecommendedClasses] = useState([]);
  const username = Cookies.get("user");

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

        let courseFilter = allCourses;
        studentInfo.map((student) => {
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
        });

        setRecommendedClasses(courseFilter);
      })
      .catch((error) => {
        console.log(error);
      });

    Promise.all([getProfile, getSections]).then((response) => {
      // let courseFilter = allCourses;
      // studentInfo.map((student) => {
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
    });
  }, []);

  // setRecommendedClasses(courseFilter);

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
                <h1>Recommended Classes</h1>
                {recommendedClasses.map((course) => {
                  return <p>{course.Course_Name}</p>;
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
