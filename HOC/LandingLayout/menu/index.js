import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const index = props => {
  return (
    <div className="">
      <header>
        <div className="ga-nav-bar-wrap">
          <div className="ga-nav-bar">
            <div className="ga-bar ga-top-bar" />
            <div className="ga-bar ga-middle-bar" />
            <div className="ga-bar ga-bottom-bar" />
          </div>
        </div>
        <div className="ga-nav-wrap">
          <a className="ga-header-logo" href="./index.html">
            <img
              src="../../static/img/green-affiliate-green-logo.png"
              alt="green affiliates"
            />
          </a>
          <nav className="ga-main-menu">
            <ul className="ga-main-menu flex flex-row lg:flex-col justify-around items-center">
              <li>
                <a className="ga-btn ga-green-btn" href="./login.html">
                  Login
                </a>
              </li>
              <li className="ga-anim">
                <a href="./contact.html">Contact Us</a>
              </li>
              <li className="ga-anim">
                <a href="./affiliate-landing-page.html">Affiliate</a>
              </li>
              <li className="ga-anim">
                <a href="./merchant-landing-page.html">Merchant</a>
              </li>
              <li className="ga-anim">
                <a href="./company-directory.html">Programs</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default index;
