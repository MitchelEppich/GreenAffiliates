const index = props => {
  return (
    <div className="ga-body-wrap ga-pages">
      <article>
        <h1 className="ga-heading">FAQ</h1>
        <div className="aff-section-one">
          <div className="aff-closing-img-wrap">
            <img
              className="ga-content-img"
              src="../../../../static/img/who-can-join.jpg"
              alt=""
            />
            <img
              className="ga-panel-img"
              src="../../../../static/img/green-panel-img.jpg"
              alt=""
            />
          </div>

          <div className="ga-aff-section-wrap">
            <h2 className="ga-heading">Who can join Green Affilates?</h2>

            <p>
              Both companies and individuals can sign up to the Green Affiliates
              network. Companies can signup and create their own affiliate
              program for affiliates to promote. Individuals can signup and
              promote any program available once your application is approved.
            </p>
          </div>
        </div>

        <div className="aff-section-two">
          <div className="aff-closing-img-wrap">
            <img
              className="ga-content-img"
              src="../../../../static/img/green-affiliates-work.jpg"
              alt=""
            />
            <img
              className="ga-panel-img"
              src="../../../../static/img/green-panel-img.jpg"
              alt=""
            />
          </div>

          <div className="ga-aff-section-wrap">
            <h2 className="ga-heading">How does Green Affiliates Work?</h2>

            <ol>
              <li>Signup to the network as an affiliate or company.</li>
              <li>
                Once your signed up, you can either create your program if your
                a company or start applying for individual affiliate programs.
              </li>
              <li>
                Once your program is created, affiliates can signup and start
                promoting your products. As an affiliate, you can start
                promoting products and making commissions.
              </li>
            </ol>
          </div>
        </div>

        <div className="aff-section-three">
          <div className="aff-closing-img-wrap">
            <img
              className="ga-content-img"
              src="../../../../static/img/design-ads.jpg"
              alt=""
            />
            <img
              className="ga-panel-img"
              src="../../../../static/img/green-panel-img.jpg"
              alt=""
            />
          </div>

          <div className="ga-aff-section-wrap">
            <h2 className="ga-heading">Do I Have to Create my Own Ads?</h2>

            <p>
              No. If your an affiliate, available programs will have their own
              ads made for promotion. If your a company, you dont have to create
              your own. We can create custom ads tailored to your program
              offering for you.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default index;
