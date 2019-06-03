import Link from "next/link";
import Profile from "./profile";
import Payment from "./payment";
import User from "./user";
import Home from "./homePage";

const index = props => {
  let path = props.router.asPath,
    view;
  if (path.includes("profile")) {
    view = <Profile {...props} />;
  }
  if (path.includes("payment")) {
    view = <Payment {...props} />;
  }
  if (path.includes("user")) {
    view = <User {...props} />;
  }
  if (path.includes("home")) {
    view = <Home {...props} />;
  }
  return (
    <React.Fragment>
      {view != null ? (
        view
      ) : (
        <React.Fragment>
          <div className="ga-content-title">
            <h1>Account Settings</h1>
          </div>
          <div className="ga-account-list">
            <ul>
              <li className="ga-profile-link">
                <Link href="/settings/profile">
                  <a>
                    <span className="ga-account-title">Profile Settings</span>
                  </a>
                </Link>
              </li>
              <li className="ga-payment-link">
                <Link href="/settings/payment">
                  <a>
                    <span className="ga-account-title">Payment Settings</span>
                  </a>
                </Link>
              </li>
              <li className="ga-user-link">
                <Link href="/settings/user">
                  <a>
                    <span className="ga-account-title">User Settings</span>
                  </a>
                </Link>
              </li>
              <li className="ga-user-link">
                <Link href="/settings/home">
                  <a>
                    <span className="ga-account-title">Home Page Settings</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
export default index;
