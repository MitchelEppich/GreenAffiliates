import React from "react";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const index = props => {
  return (
    <div className="ga-panel-wrap ga-header-panel">
      <div className="ga-green-panel">
        <div className="ga-panel-section ga-panel-section-one mt-24">
          {/* <a href="./index.html">
            <img
              src="../../../../static/img/green-affiliates-white-logo.png"
              alt="green affiliates"
            />
          </a> */}
          <h1>
            World's Largest <span>Cannabis Affiliate</span>
            <span>Program Network</span>
          </h1>
          <p>
            Grow and Earn Commissions with the largest collection of Cannabis
            Affiliate Programs all in one place.
          </p>
          <div className="ga-button-wrap flex flex-row justify-around">
            <a className="ga-btn ga-white-brdr-btn" href="">
              Learn More
            </a>
            <a className="ga-btn ga-white-btn" href="./signup.html">
              Join Now
            </a>
          </div>
        </div>

        <div className="ga-panel-section ga-panel-section-two">
          <ul className="ga-social-menu flex flex-col items-center justify-center">
            <li>
              <a href="#">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="fa-5x text-white hover:text-green-dark slow"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="fa-5x text-white hover:text-green-dark slow"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="fa-5x text-white hover:text-green-dark slow"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
