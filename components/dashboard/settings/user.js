const index = props => {
  return (
    <React.Fragment>
      <div class="ga-content-title">
        <h1>Account User Settings</h1>
      </div>

      <div class="ga-account-list ga-user-accounts">
        <div class="ga-add-user">
          <span>
            <a class="ga-btn ga-view-btn" href="./add-user.html">
              Add User +
            </a>
          </span>
        </div>
        <ul>
          <li class="ga-user-profile">
            <span class="ga-account-title">
              Phelipe
              <span class="ga-user-role">(Account Admin)</span>
            </span>

            <span class="ga-account-email">phelipe@vancoastind.com</span>

            <span class="ga-edit-user">
              <a class="ga-btn ga-view-btn" href="#">
                Edit
              </a>
            </span>

            <span>
              <a class="ga-user-remove" href="#">
                Remove
              </a>
            </span>
          </li>
          <li class="ga-user-profile">
            <span class="ga-account-title">
              Jenn
              <span class="ga-user-role">(Affiliate Manager)</span>
            </span>

            <span class="ga-account-email">jenn@vancoastind.com</span>

            <span class="ga-edit-user">
              <a class="ga-btn ga-view-btn" href="#">
                Edit
              </a>
            </span>

            <span>
              <a class="ga-user-remove" href="#">
                Remove
              </a>
            </span>
          </li>
          <li class="ga-user-profile">
            <span class="ga-account-title">
              Aziz
              <span class="ga-user-role">(Data User)</span>
            </span>

            <span class="ga-account-email">bob@vancoastind.com</span>

            <span class="ga-edit-user">
              <a class="ga-btn ga-view-btn" href="./edit-user.html">
                Edit
              </a>
            </span>

            <span>
              <a class="ga-user-remove" href="#">
                Remove
              </a>
            </span>
          </li>
        </ul>
      </div>
      <div class="ga-message-overlay">
        <div class="popup-content">
          <i class="far fa-times-circle close" />
          <h2>Confirm</h2>
          <p>Are you sure you want to delete this user?</p>

          <span>
            <a class="ga-btn ga-view-btn confirm-deletion" href="#">
              Confirm Deletion
            </a>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default index;
