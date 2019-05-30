const index = props => {
  return (
    <React.Fragment>
      <div className="ga-content-title">
        <h1>Account Settings</h1>
      </div>
      <div className="ga-account-list">
        <ul>
          <li className="ga-profile-link">
            <a href="./profile-settings.html">
              <span className="ga-account-title">Profile Settings</span>
            </a>
          </li>
          <li className="ga-payment-link">
            <a href="./payment-settings.html">
              <span className="ga-account-title">Payment Settings</span>
            </a>
          </li>
          <li className="ga-user-link">
            <a href="./user-settings.html">
              <span className="ga-account-title">User Settings</span>
            </a>
          </li>
          <li className="ga-user-link">
            <a href="./home-settings.html">
              <span className="ga-account-title">Home Page Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
export default index;
