const index = props => {
  return (
    <React.Fragment>
      <div className="ga-content-title">
        <h1>Home Screen Settings</h1>
        <h3>Select which panels you'd like shown on the Home Screen</h3>
      </div>

      <div className="ga-account-list ga-user-accounts">
        <form action="#">
          <label className="ga-home-check">
            <span className="ga-desc">Total Commissions Generated</span>
            <div className="ga-homescreen-inputs">
              <span>Commissions</span>
              <input type="checkbox" name="radio" />
              <span className="checkmark" />
            </div>
          </label>

          <label className="ga-home-check">
            <span className="ga-desc">
              Shows amount of commissions pending approval
            </span>
            <div className="ga-homescreen-inputs">
              <span>Pending Commissions</span>
              <input type="checkbox" name="radio" />
              <span className="checkmark" />
            </div>
          </label>
          <label className="ga-home-check">
            <span className="ga-desc">List of top performers on program</span>
            <div className="ga-homescreen-inputs">
              <span className="ga-check-title">Top Performing Affiliates</span>
              <input type="checkbox" name="radio" />
              <span className="checkmark" />
            </div>
          </label>
          <label className="ga-home-check">
            <span className="ga-desc">
              Graph showing total sales by day/week/month/year
            </span>
            <div className="ga-homescreen-inputs">
              <span>Sales Graph</span>
              <input type="checkbox" name="radio" />
              <span className="checkmark" />
            </div>
          </label>
          <label className="ga-home-check">
            <span className="ga-desc">Total amount of traffic from program</span>
            <div className="ga-homescreen-inputs">
              <span>Traffic</span>
              <input type="checkbox" name="radio" />
              <span className="checkmark" />
            </div>
          </label>
          <label className="ga-home-check">
            <span className="ga-desc">Total amount to be paid out</span>
            <div className="ga-homescreen-inputs">
              <span>Payouts</span>
              <input type="checkbox" name="radio" />
              <span className="checkmark" />
            </div>
          </label>
          <label className="ga-home-check">
            <span className="ga-desc">Shows list of awards</span>
            <div className="ga-homescreen-inputs">
              <span>Awards</span>
              <input type="checkbox" name="radio" />
              <span className="checkmark" />
            </div>
          </label>

          <a
            className="ga-btn ga-view-btn save-homepage"
            style="background:#006845;color:#fff;font-size: 20px;margin-top:30px;"
          >
            Save Settings
          </a>
        </form>
      </div>

      <div className="ga-message-overlay">
        <div className="popup-content">
          <i className="far fa-times-circle close" />
          <h2>Home Screen Updated!</h2>
          <p>
            All panels on the front page have been updated to reflect your
            preferences.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default index;
