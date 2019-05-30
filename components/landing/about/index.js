const index = props => {
  return (
    <div className="ga-body-wrap ga-pages ga-about">
      <article>
        <h1 className="ga-heading">About Green Affiliates</h1>
        <div className="aff-section-one">
          <div className="aff-closing-img-wrap">
            <img
              className="ga-content-img"
              src="../../../../static/img/about-green-affiliates.jpg"
              alt=""
            />
            <img
              className="ga-panel-img"
              src="../../../../static/img/green-panel-img.jpg"
              alt=""
            />
          </div>

          <div className="ga-aff-section-wrap">
            <h2 className="ga-heading">Why We Got Started</h2>

            <p>
              Green Affiliates was designed to supply a platform for cannabis
              companies to promote their products in a time when many platforms
              are banning cannabis companies. Affiliates and 'would be'
              affiliates have fewer opportunities available because of this.
            </p>
            <p>
              Green Affiliates allows both affiliates and companies to promote
              their products as they choose.
            </p>
          </div>
        </div>

        <div className="aff-section-two">
          <div className="aff-closing-img-wrap">
            <img
              className="ga-content-img"
              src="../../../../static/img/increase-affiliate-sales.png"
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
              We Created a Cannabis Affiliate Network
            </h2>

            <p>
              The worlds largest cannabis affiliate network where cannabis
              companies from all over the world can create their own affiliate
              program.
            </p>
            <p>
              Affiliates can then choose form the largest selection of cannabis
              companies to promote and provide quality products.
            </p>
          </div>
        </div>

        <div className="aff-section-three">
          <div className="aff-closing-img-wrap">
            <img
              className="ga-content-img"
              src="../../../../static/img/affiliate-software-design.jpg"
              alt=""
            />
            <img
              className="ga-panel-img"
              src="../../../../static/img/green-panel-img.jpg"
              alt=""
            />
          </div>

          <div className="ga-aff-section-wrap">
            <h2 className="ga-heading">Affiliate Software Design</h2>

            <p>
              We designed a state of the art affiliate software where affiliates
              and companies can track their statistics and build better
              startegies using a modern, clean and intuitive interface.
            </p>

            <p>
              If your read to get started, you can sign up as a merchant or
              affiliate. Use the link below to start making commissions today.
            </p>

            <a className="ga-btn ga-green-btn" href="./signup.html">
              Signup
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default index;
