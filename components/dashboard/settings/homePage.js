const index = props => {
  return (
    <React.Fragment>
      <div class="ga-content-title">
        <h1>Home Screen Settings</h1>
        <h3>Select which panels you'd like shown on the Home Screen</h3>
      </div>

      <div class="ga-account-list ga-user-accounts">
        <form action="#">
          <label class="ga-home-check">
            <span class="ga-desc">Total Commissions Generated</span>
            <div class="ga-homescreen-inputs">
              <span>Commissions</span>
              <input type="checkbox" name="radio" />
              <span class="checkmark" />
            </div>
          </label>

          <label class="ga-home-check">
            <span class="ga-desc">
              Shows amount of commissions pending approval
            </span>
            <div class="ga-homescreen-inputs">
              <span>Pending Commissions</span>
              <input type="checkbox" name="radio" />
              <span class="checkmark" />
            </div>
          </label>
          <label class="ga-home-check">
            <span class="ga-desc">List of top performers on program</span>
            <div class="ga-homescreen-inputs">
              <span class="ga-check-title">Top Performing Affiliates</span>
              <input type="checkbox" name="radio" />
              <span class="checkmark" />
            </div>
          </label>
          <label class="ga-home-check">
            <span class="ga-desc">
              Graph showing total sales by day/week/month/year
            </span>
            <div class="ga-homescreen-inputs">
              <span>Sales Graph</span>
              <input type="checkbox" name="radio" />
              <span class="checkmark" />
            </div>
          </label>
          <label class="ga-home-check">
            <span class="ga-desc">Total amount of traffic from program</span>
            <div class="ga-homescreen-inputs">
              <span>Traffic</span>
              <input type="checkbox" name="radio" />
              <span class="checkmark" />
            </div>
          </label>
          <label class="ga-home-check">
            <span class="ga-desc">Total amount to be paid out</span>
            <div class="ga-homescreen-inputs">
              <span>Payouts</span>
              <input type="checkbox" name="radio" />
              <span class="checkmark" />
            </div>
          </label>
          <label class="ga-home-check">
            <span class="ga-desc">Shows list of awards</span>
            <div class="ga-homescreen-inputs">
              <span>Awards</span>
              <input type="checkbox" name="radio" />
              <span class="checkmark" />
            </div>
          </label>

          <a
            class="ga-btn ga-view-btn save-homepage"
            style="background:#006845;color:#fff;font-size: 20px;margin-top:30px;"
          >
            Save Settings
          </a>
        </form>
      </div>

      <div class="ga-message-overlay">
        <div class="popup-content">
          <i class="far fa-times-circle close" />
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
