import React from "react";
import Link from "next/link";

const index = props => {
  return (
    <footer>
      <div className="ga-footer-wrap flex flex-row lg:flex-col justify-between">
        <div className="ga-footer-box ga-box-one">
          <a href="/">
            <img
              src="../../../static/img/green-affiliate-green-logo.png"
              alt="green affiliates"
            />
          </a>
        </div>

        <div className="ga-footer-box ga-box-two">
          <nav className="ga-footer-menu">
            <ul>
              <li className="ga-anim">
                <Link href="/program">
                  <a>Company Directory</a>
                </Link>
              </li>
              <li className="ga-anim">
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li className="ga-anim">
                <Link href="/faq">
                  <a>FAQ</a>
                </Link>
              </li>
              <li className="ga-anim">
                <Link href="/contact">
                  <a>Contact Us</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="ga-footer-box ga-box-three">
          <nav className="ga-footer-menu">
            <ul>
              <li className="ga-anim">
                <Link href="/terms">
                  <a>Terms of Use</a>
                </Link>
              </li>
              <li className="ga-anim">
                <Link href="/privacy">
                  <a>Privacy Policy</a>
                </Link>
              </li>
              <li className="ga-anim">
                <Link href="/support">
                  <a>Support</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="ga-footer-copy">
        <p>Copyright GreenAffiliates 2019. All Rights Reserved</p>
      </div>

      <div className="ga-scroll">
        <i className="far fa-arrow-alt-circle-up" />
      </div>
    </footer>
  );
};

export default index;
