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
          <a className="ga-header-logo" href="/">
            <img
              src="../../static/img/green-affiliate-green-logo.png"
              alt="green affiliates"
            />
          </a>
          <nav className="ga-main-menu">
            <ul className="ga-main-menu flex flex-row lg:flex-col justify-around items-center">
              <li>
                <Link href="/login">
                  <a className="ga-btn ga-green-btn">Login</a>
                </Link>
              </li>
              <li className="ga-anim">
                <Link href="/contact">
                  <a>Contact Us</a>
                </Link>
              </li>
              <li className="ga-anim">
                <Link href="/affiliate">
                  <a>Affiliate</a>
                </Link>
              </li>
              <li className="ga-anim">
                <Link href="/merchant">
                  <a>Merchant</a>
                </Link>
              </li>
              <li className="ga-anim">
                <Link href="/program">
                  <a>Programs</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default index;
