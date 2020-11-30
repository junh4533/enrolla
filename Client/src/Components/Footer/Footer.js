import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer d-flex justify-content-center align-items-center">
      {/* ***********START CODING HERE***********  */}
      <div>
        <FontAwesomeIcon className="social-icon" icon={faFacebookSquare} />
        <FontAwesomeIcon className="social-icon" icon={faInstagram} />
        <FontAwesomeIcon className="social-icon" icon={faLinkedinIn} />
        <FontAwesomeIcon className="social-icon" icon={faTwitter} />
        <div>Copyright © Enrolla 2020</div>
      </div>

      {/* ***********stop CODING HERE***********  */}
    </div>
  );
};
export default Footer;
