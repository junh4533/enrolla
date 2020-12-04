import React from "react";
import "./AdPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import leftCircles from "../../assets/images/left-circles.png";
import rightCircles from "../../assets/images/right-circles.png";

const AdPage = () => {
  return (
    <div className="ad-page">
      {/* ***********START CODING HERE***********  */}

      <div className="container pt-5">
        <h1 className="text-center">Get the best deal for less stress</h1>
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-4">
            <div className="plan-card">
              <h1 className="blue">Free</h1>
              <h1>
                $0.00 <span className="monthly">/ month</span>
                <hr className="blue" />
                <h3 className="text-center">
                  <FontAwesomeIcon icon={faTimesCircle} />
                  {""} Sponsor Ads
                </h3>
              </h1>
            </div>
            <button
              className="btn main-button blue"
              onClick={(e) => {
                e.preventDefault();
                window.location = "/login";
              }}
            >
              Continue with Ads
            </button>
          </div>
          <div className="col-4">
            <div className="plan-card">
              <h1 className="red">Premium</h1>
              <h1>
                $2.99 <span className="monthly">/ month</span>
                <hr className="red" />
                <h3 className="text-center">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  {""} No Ads
                </h3>
              </h1>
            </div>
            <button
              className="btn main-button red"
              onClick={(e) => {
                e.preventDefault();
                window.location = "/login";
              }}
            >
              Continue with Ads
            </button>
          </div>
        </div>
      </div>

      <img
        className="circles"
        id="left-circles"
        src={leftCircles}
        alt="left circles"
      />
      <img
        className="circles"
        id="right-circles"
        src={rightCircles}
        alt="right circles"
      />

      {/* ***********stop CODING HERE***********  */}
    </div>
  );
};

export default AdPage;
