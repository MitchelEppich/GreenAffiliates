import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const index = props => {
  return (
    <React.Fragment>
      <nav className="ga-icon-nav">
        <ul>
          <li className="active">
            <a className="ga-menu-item" href="./merchant-home.html">
              <i>
                <FontAwesomeIcon icon="home" className="" />
              </i>
            </a>
            <span className="ga-tooltip-text">Home</span>
          </li>
          <li>
            <a className="ga-menu-item" href="./merchant-program.html">
              <i>
                <FontAwesomeIcon icon="cogs" className="" />
              </i>
            </a>
            <span className="ga-tooltip-text">Program</span>
          </li>
          <li>
            <a className="ga-menu-item" href="./merchant-assets.html">
              <i>
                <FontAwesomeIcon icon="file" className="" />
              </i>
            </a>
            <span className="ga-tooltip-text">Assets</span>
          </li>
          <li>
            <a className="ga-menu-item" href="./merchant-commissions.html">
              <i>
                <FontAwesomeIcon icon="hand-holding-usd" className="" />
              </i>
            </a>
            <span className="ga-tooltip-text">Commissions</span>
          </li>
          <li>
            <a className="ga-menu-item" href="./merchant-affiliates.html">
              <i>
                <FontAwesomeIcon icon="users" className="" />
              </i>
            </a>
            <span className="ga-tooltip-text">Affiliates</span>
          </li>
          <li>
            <a className="ga-menu-item" href="./merchant-goals.html">
              <i>
                <FontAwesomeIcon icon="chart-pie" className="" />
              </i>
            </a>
            <span className="ga-tooltip-text">Goals</span>
          </li>
          <li>
            <a className="ga-menu-item" href="./merchant-messages.html">
              <i>
                <FontAwesomeIcon icon="envelope" className="" />
              </i>
            </a>
            <span className="ga-tooltip-text">Messages</span>
          </li>
          <li>
            <a className="ga-menu-item" href="./merchant-payments.html">
              <i>
                <FontAwesomeIcon icon="credit-card" className="" />
              </i>
            </a>
            <span className="ga-tooltip-text">Payment</span>
          </li>
          <li>
            <a className="ga-menu-item" href="./merchant-settings.html">
              <i>
                <FontAwesomeIcon icon="sliders-h" className="" />
              </i>
            </a>
            <span className="ga-tooltip-text">Settings</span>
          </li>
        </ul>
      </nav>
      <div className="ga-nav-bar-wrap">
        <div className="ga-nav-bar">
          <div className="ga-bar ga-top-bar" />
          <div className="ga-bar ga-middle-bar" />
          <div className="ga-bar ga-bottom-bar" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default index;
