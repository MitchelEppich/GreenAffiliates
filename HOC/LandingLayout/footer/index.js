import React from "react";

const index = props => {
  return (
    <footer>
      <div className="ga-footer-wrap flex flex-row lg:flex-col justify-between">
        <div className="ga-footer-box ga-box-one">
          <a href="./index.html">
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
                <a href="./company-directory.html">Company Directory</a>
              </li>
              <li className="ga-anim">
                <a href="./about.html">About</a>
              </li>
              <li className="ga-anim">
                <a href="./faq.html">FAQ</a>
              </li>
              <li className="ga-anim">
                <a href="./contact.html">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="ga-footer-box ga-box-three">
          <nav className="ga-footer-menu">
            <ul>
              <li className="ga-anim">
                <a href="./terms.html">Terms of Use</a>
              </li>
              <li className="ga-anim">
                <a href="./privacy-policy.html">Privacy Policy</a>
              </li>
              <li className="ga-anim">
                <a href="./support.html">Support</a>
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
