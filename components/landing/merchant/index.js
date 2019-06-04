import React from "react";
import Link from "next/link";

const index = props => {
  return (
    <div className="ga-body-wrap ga-affiliate-landing">
      <article>
        <div className="aff-section-one">
          <div className="aff-closing-img-wrap">
            <img
              className="ga-content-img"
              src="../../../../static/img/ga-merchant-program.jpg"
              alt=""
            />
            <img
              className="ga-panel-img"
              src="../../../../static/img/green-panel-img.jpg"
              alt=""
            />
          </div>

          <div className="ga-aff-section-wrap">
            <h1 className="ga-heading">Merchant Program</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit drerit in vulputate velit.
            </p>
            <Link href="/register">
              <a className="ga-btn ga-green-btn">Sign Up</a>
            </Link>
          </div>
        </div>

        <div className="aff-section-two">
          <div className="aff-closing-img-wrap">
            <img
              className="ga-content-img"
              src="../../../../static/img/ga-affiliate-promotions.jpg"
              alt=""
            />
            <img
              className="ga-panel-img"
              src="../../../../static/img/green-panel-img.jpg"
              alt=""
            />
          </div>

          <div className="ga-aff-section-wrap">
            <h2 className="ga-heading">
              Thousands of Affiliates to Promote Your Products
            </h2>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit drerit in vulputate velit. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit drerit in vulputate velit.
            </p>
          </div>
        </div>

        <div className="aff-section-three">
          <div className="aff-closing-img-wrap">
            <img
              className="ga-content-img"
              src="../../../../static/img/ga-merchant-program-signup.jpg"
              alt=""
            />
            <img
              className="ga-panel-img"
              src="../../../../static/img/green-panel-img.jpg"
              alt=""
            />
          </div>

          <div className="ga-aff-section-wrap">
            <h2 className="ga-heading">Create Your Affiliate Program Today</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit drerit in vulputate velit.
            </p>
            <Link href="/register">
              <a className="ga-btn ga-green-btn-action">Sign Up</a>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default index;
