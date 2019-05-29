import React from "react";

const index = props => {
  return (
    <div className="double-section">
      <div className="double-section-two ga-double-left">
        <img
          className="ga-content-img"
          src="../../../../static/img/affiliate-boardroom.png"
          alt=""
        />
        <img
          className="ga-panel-img"
          src="../../../../static/img/green-panel-img.jpg"
          alt=""
        />
      </div>

      <div className="double-section-one">
        <h2 className="ga-heading">What is Affiliate Marketing?</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit drerit in vulputate velit.
        </p>

        <a
          className="ga-btn ga-green-btn"
          href="./what-is-affiliate-marketing.html"
        >
          Explore More
        </a>
      </div>
    </div>
  );
};

export default index;
