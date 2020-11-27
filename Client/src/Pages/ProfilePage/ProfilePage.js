import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import Cookies from "js-cookie";
import "./ProfilePage.scss";

const ProfilePage = () => {
  const [studentInfo, setStudentInfo] = useState([]);
  const username = Cookies.get("user");

  useEffect(() => {
    Axios.get("http://localhost:3001/api/query/profile", {
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
  }, []);
  return (
    <div className="profile-page">
      {/* ***********START CODING HERE***********  */}
      <h1>Profile Page</h1>

      {/* ***********stop CODING HERE***********  */}
    </div>
  );
};

export default ProfilePage;
