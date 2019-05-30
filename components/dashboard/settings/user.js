const index = props => {
  return (
    <React.Fragment>
      <div className="ga-content-title">
        <h1>Account User Settings</h1>
      </div>

      <div className="ga-account-list ga-user-accounts">
        <div className="ga-add-user">
          <span>
            <a className="ga-btn ga-view-btn" href="./add-user.html">
              Add User +
            </a>
          </span>
        </div>
        <ul>
          <li className="ga-user-profile">
            <span className="ga-account-title">
              Phelipe
              <span className="ga-user-role">(Account Admin)</span>
            </span>

            <span className="ga-account-email">phelipe@vancoastind.com</span>

            <span className="ga-edit-user">
              <a className="ga-btn ga-view-btn" href="#">
                Edit
              </a>
            </span>

            <span>
              <a className="ga-user-remove" href="#">
                Remove
              </a>
            </span>
          </li>
          <li className="ga-user-profile">
            <span className="ga-account-title">
              Jenn
              <span className="ga-user-role">(Affiliate Manager)</span>
            </span>

            <span className="ga-account-email">jenn@vancoastind.com</span>

            <span className="ga-edit-user">
              <a className="ga-btn ga-view-btn" href="#">
                Edit
              </a>
            </span>

            <span>
              <a className="ga-user-remove" href="#">
                Remove
              </a>
            </span>
          </li>
          <li className="ga-user-profile">
            <span className="ga-account-title">
              Aziz
              <span className="ga-user-role">(Data User)</span>
            </span>

            <span className="ga-account-email">bob@vancoastind.com</span>

            <span className="ga-edit-user">
              <a className="ga-btn ga-view-btn" href="./edit-user.html">
                Edit
              </a>
            </span>

            <span>
              <a className="ga-user-remove" href="#">
                Remove
              </a>
            </span>
          </li>
        </ul>
      </div>
      <div className="ga-message-overlay">
        <div className="popup-content">
          <i className="far fa-times-circle close" />
          <h2>Confirm</h2>
          <p>Are you sure you want to delete this user?</p>

          <span>
            <a className="ga-btn ga-view-btn confirm-deletion" href="#">
              Confirm Deletion
            </a>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default index;
