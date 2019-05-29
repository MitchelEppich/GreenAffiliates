import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const index = props => {
  return (
    <header>
      <div className="ga-header-content">
        <div className="ga-timestamp-log">
          <p>Last Logged in: May 01, 2019</p>
        </div>
        <h1 className="">
          Welcome Back, <span className="">CannHydro</span>
        </h1>
        <div className="ga-timestamp">
          <p>Today's Date: May 09, 2019</p>
        </div>

        <div className="ga-badges">
          <div className="ga-badge-award">AWARDS:</div>
          <ul className="list-reset">
            <li>
              <span className="ga-badge-icon">
                <i>
                  <FontAwesomeIcon icon="star" className="" />
                </i>
                <span className="ga-icon-desc">5 Star Rating</span>
              </span>
            </li>
            <li>
              <span className="ga-badge-icon">
                <i>
                  <FontAwesomeIcon icon="comments" className="" />
                </i>
                <span className="ga-icon-desc">98%+ Response Rate</span>
              </span>
            </li>
            {/* <li>
              <span className="ga-badge-icon">
                <i>
                  <FontAwesomeIcon icon="canadian-maple-leaf" className="" />
                </i>
                <span className="ga-icon-desc">Top Canadian Company</span>
              </span>
            </li> */}
            <li>
              <span className="ga-badge-icon">
                <i>
                  <FontAwesomeIcon icon="flag-usa" className="" />
                </i>
                <span className="ga-icon-desc">Top American Company</span>
              </span>
            </li>
            <li>
              <span className="ga-badge-icon">
                <i>
                  <FontAwesomeIcon icon="seedling" className="" />
                </i>
                <span className="ga-icon-desc">Quickest Growth</span>
              </span>
            </li>
            <li>
              <span className="ga-badge-icon">
                <i>
                  <FontAwesomeIcon icon="feather" className="" />
                </i>
                <span className="ga-icon-desc">Fastest Response Time</span>
              </span>
            </li>
            <li>
              <span className="ga-badge-icon">
                <i>
                  <FontAwesomeIcon icon="trophy" className="" />
                </i>
                <span className="ga-icon-desc">$100k Mark</span>
              </span>
            </li>
            <li>
              <span className="ga-badge-icon">
                <i>
                  <FontAwesomeIcon icon="crown" className="" />
                </i>
                <span className="ga-icon-desc">Featured Company</span>
              </span>
            </li>
            <li>
              <span className="ga-badge-icon">
                <i>
                  <FontAwesomeIcon icon="user-astronaut" className="" />
                </i>
                <span className="ga-icon-desc">Highest Company</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="ga-profile-img">
        <img src="../static/img/cannhydro-logo.jpg" alt="cannhydro-logo" />
      </div>
    </header>
  );
};
export default index;
