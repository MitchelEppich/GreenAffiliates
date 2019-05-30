import React from "react";

const index = props => {
  return (
    <div class="ga-body-wrap">
      <div class="ga-green-panel ga-signup-one-panel">
        <div class="ga-signup-wrap">
          <div class="ga-signup-one">
            <div class="ga-signup-text">
              <img
                class="ga-signup-logo"
                src="../../../../static/img/ga-affiliate-signup-logo.png"
                alt="green affiliates signup"
              />

              <div class="ga-signup-text-wrap">
                <span>Step 01:</span>
                <h1>Name and Email</h1>

                <div class="ga-step-counter">
                  <div class="ga-steps ga-step-one ga-active-step">
                    <div class="ga-steps-wrap">
                      <a href="./affiliate-signup-step-one.html">01</a>
                    </div>
                  </div>
                  <div class="ga-steps ga-step-two">
                    <div class="ga-steps-wrap">
                      <a href="./affiliate-signup-step-two.html">02</a>
                    </div>
                  </div>
                  <div class="ga-steps ga-step-three">
                    <div class="ga-steps-wrap">
                      <a href="./affiliate-signup-step-three.html">03</a>
                    </div>
                  </div>
                  <div class="ga-steps ga-step-four">
                    <div class="ga-steps-wrap">
                      <a href="./affiliate-signup-step-four.html">04</a>
                    </div>
                  </div>
                </div>

                <p class="ga-signup-footer-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet.
                </p>
              </div>
            </div>
          </div>

          <div class="ga-signup-two">
            <form class="ga-form ga-signup-form-one">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="eMail Address" />
              <input type="text" placeholder="Confirm eMail Address" />
              <input type="text" placeholder="Phone" />
              <input
                class="ga-btn ga-login-btn"
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
