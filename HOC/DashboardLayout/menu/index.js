import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const index = props => {
  let router = props.router;
  return (
    <React.Fragment>
      <nav className="ga-icon-nav">
        <ul>
          <li className={path(router, "dashboard")}>
            <Link href="./dashboard">
              <a className="ga-menu-item">
                <i>
                  <FontAwesomeIcon icon="home" className="" />
                </i>
              </a>
            </Link>
            <span className="ga-tooltip-text">Home</span>
          </li>
          {/* <li>
            <a className="ga-menu-item" href="./merchant-program.html">
              <i>
                <FontAwesomeIcon icon="cogs" className="" />
              </i>
            </a>
            <span className="ga-tooltip-text">Program</span>
          </li> */}
          <li className={path(router, "assets")}>
            <Link href="/assets">
              <a className="ga-menu-item" href="">
                <i>
                  <FontAwesomeIcon icon="file" className="" />
                </i>
              </a>
            </Link>
            <span className="ga-tooltip-text">Assets</span>
          </li>
          <li className={path(router, "commissions")}>
            <Link href="/commissions">
              <a className="ga-menu-item" href="./merchant-commissions.html">
                <i>
                  <FontAwesomeIcon icon="hand-holding-usd" className="" />
                </i>
              </a>
            </Link>
            <span className="ga-tooltip-text">Commissions</span>
          </li>
          <li className={path(router, "affiliates")}>
            <Link href="/affiliates">
              <a className="ga-menu-item" href="./merchant-affiliates.html">
                <i>
                  <FontAwesomeIcon icon="users" className="" />
                </i>
              </a>
            </Link>
            <span className="ga-tooltip-text">Affiliates</span>
          </li>
          <li className={path(router, "goals")}>
            <Link href="/goals">
              <a className="ga-menu-item" href="./merchant-goals.html">
                <i>
                  <FontAwesomeIcon icon="chart-pie" className="" />
                </i>
              </a>
            </Link>
            <span className="ga-tooltip-text">Goals</span>
          </li>
          <li className={path(router, "messages")}>
            <Link href="/messages">
              <a className="ga-menu-item" href="./merchant-messages.html">
                <i>
                  <FontAwesomeIcon icon="envelope" className="" />
                </i>
              </a>
            </Link>
            <span className="ga-tooltip-text">Messages</span>
          </li>
          <li className={path(router, "payment")}>
            <Link href="/payment">
              <a className="ga-menu-item" href="./merchant-payments.html">
                <i>
                  <FontAwesomeIcon icon="credit-card" className="" />
                </i>
              </a>
            </Link>
            <span className="ga-tooltip-text">Payment</span>
          </li>
          <li className={path(router, "settings")}>
            <Link href="/settings">
              <a className="ga-menu-item" href="./merchant-settings.html">
                <i>
                  <FontAwesomeIcon icon="sliders-h" className="" />
                </i>
              </a>
            </Link>
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

let path = (router, pathName) => {
  return router.asPath.includes(pathName) ? "active" : "";
};

export default index;
