import React from "react";

const index = props => {
  return (
    <div className="ga-body-wrap">
      <div className="ga-green-panel ga-signup-one-panel">
        <div className="ga-signup-wrap">
          <div className="ga-signup-one">
            <div className="ga-signup-text">
              <img
                className="ga-signup-logo"
                src="../../../../static/img/ga-affiliate-signup-logo.png"
                alt="green affiliates signup"
              />

              <div className="ga-signup-text-wrap">
                <span>Step 01:</span>
                <h1>Name and Email</h1>

                <div className="ga-step-counter">
                  <div className="ga-steps ga-step-one ga-active-step">
                    <div className="ga-steps-wrap">
                      <a href="./affiliate-signup-step-one.html">01</a>
                    </div>
                  </div>
                  <div className="ga-steps ga-step-two">
                    <div className="ga-steps-wrap">
                      <a href="./affiliate-signup-step-two.html">02</a>
                    </div>
                  </div>
                  <div className="ga-steps ga-step-three">
                    <div className="ga-steps-wrap">
                      <a href="./affiliate-signup-step-three.html">03</a>
                    </div>
                  </div>
                  <div className="ga-steps ga-step-four">
                    <div className="ga-steps-wrap">
                      <a href="./affiliate-signup-step-four.html">04</a>
                    </div>
                  </div>
                </div>

                <p className="ga-signup-footer-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet.
                </p>
              </div>
            </div>
          </div>

          <div className="ga-signup-two">
            <form className="ga-form ga-signup-form-one">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="eMail Address" />
              <input type="text" placeholder="Confirm eMail Address" />
              <input type="text" placeholder="Phone" />
              <input
                className="ga-btn ga-login-btn"
                type="submit"
                value="Confirm eMail"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
