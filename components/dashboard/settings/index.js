const index = props => {
  return (
    <React.Fragment>
      <div class="ga-content-title">
        <h1>Account Settings</h1>
      </div>
      <div class="ga-account-list">
        <ul>
          <li class="ga-profile-link">
            <a href="./profile-settings.html">
              <span class="ga-account-title">Profile Settings</span>
            </a>
          </li>
          <li class="ga-payment-link">
            <a href="./payment-settings.html">
              <span class="ga-account-title">Payment Settings</span>
            </a>
          </li>
          <li class="ga-user-link">
            <a href="./user-settings.html">
              <span class="ga-account-title">User Settings</span>
            </a>
          </li>
          <li class="ga-user-link">
            <a href="./home-settings.html">
              <span class="ga-account-title">Home Page Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
export default index;
