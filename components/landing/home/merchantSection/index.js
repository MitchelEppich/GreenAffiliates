import React from "react";

const index = props => {
  return (
    <div className="overlap-section">
      <div className="overlap-section-one">
        <h2>Merchants</h2>
        <div className="ga-green-panel">
          <div className="ga-merchant-panel">
            <h3>Extend Your Brands Reach</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit drerit in vulputate velit.
            </p>

            <div className="ga-button-wrap flex flex-row justify-around">
              <a
                className="ga-btn ga-white-brdr-btn"
                href="./merchant-landing-page.html"
              >
                Learn More
              </a>
              <a
                className="ga-btn ga-white-btn"
                href="./merchant-signup-step-one.html"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="overlap-section-two">
        <h2>Affiliates</h2>
        <div className="ga-green-panel">
          <div className="ga-affiliate-panel">
            <h3>Promote Thousands of Products</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit drerit in vulputate velit.
            </p>

            <div className="ga-button-wrap flex flex-row justify-around">
              <a
                className="ga-btn ga-white-brdr-btn"
                href="./affiliate-landing-page.html"
              >
                Learn More
              </a>
              <a
                className="ga-btn ga-white-btn"
                href="./affiliate-signup-step-one.html"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
