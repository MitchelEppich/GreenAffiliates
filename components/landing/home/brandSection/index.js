const index = props => {
  return (
    <div className="ga-brand-section">
      <h2>Featured Cannabis Companies We Work With</h2>
      <div className="ga-brand-section-wrap">
        <div className="ga-brands ga-brand-one">
          <img src="../../../../static/img/ga-bong-shop.png" alt="bong co" />
          <p>
            San Francisco's largest and fastest growing bong shop. Specializing
            in custom made bongs, they have been the #1 shop on the west coast.
          </p>
        </div>

        <div className="ga-brands ga-brand-two">
          <img
            src="../../../../static/img/ga-cannabanoid-logo.png"
            alt="cannabanoid co"
          />
          <p>
            Cannabanoid creates some of the most popular extract sold at
            dispensaries in Colorado. They have expanded to 8 other states and
            dozens of other dispensaries.
          </p>
        </div>

        <div className="ga-brands ga-brand-three">
          <img
            src="../../../../static/img/ga-sativa-logo.png"
            alt="sativa co"
          />
          <p>
            Sativa is a cannabis company specializing in medical grade sativa
            strains from Seattle, WA. They are now sold in store nationwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
