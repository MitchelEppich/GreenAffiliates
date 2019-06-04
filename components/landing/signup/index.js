import React from "react";
import Link from "next/link";

const index = props => {
  return (
    <div className="ga-body-wrap">
      <div className="ga-green-panel ga-signup-one-panel">
        <div className="ga-signup-wrap">
          <div className="ga-signup-affiliate">
            <h2>Affiliate Signup</h2>
            <h3>Partner with thousands of companies</h3>
            <p>
              We have partnered with thousands of companies in the cannabis
              industry to create the largest cannabis affiliate program network.
              This gives you the ability to promote thousands of cannabis
              related products from your platform. Once your signed up you'll
              have access to our state of the art affiliate software, ready to
              promote products.
            </p>
            <a
              className="ga-btn ga-white-btn"
              href="./affiliate-signup-step-one.html"
            >
              Get Started
            </a>
          </div>

          <div className="ga-divider" />

          <div className="ga-signup-merchant">
            <h2>Merchant Signup</h2>
            <h3>Have thousands of affiliate promote your products</h3>
            <p>
              Our affiliates are carefully selected and pre-screened to join
              greenAffiliates™. We have over 100,000+ affiliates ready to
              promote your product within the cannabis industry. There is not
              other program like this on planet earth that allows you to access
              millions of laser targeted customers.
            </p>
            <Link href="/register">
              <a className="ga-btn ga-white-btn">Signup</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
