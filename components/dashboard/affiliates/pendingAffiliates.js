import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const index = props => {
  return (
    <div className="ga-content-panel ga-third-panel ga-pending-Affiliates">
      <span className="ga-panel-icon">
        <i>
          <FontAwesomeIcon icon="user-clock" classNameName="" />
        </i>
      </span>
      <h2>Pending Affiliates</h2>
      <span className="ga-panel-data">8</span>
      <a href="./pending-affiliates.html" className="ga-btn ga-view-btn">
        View Applications
      </a>
    </div>
  );
};
export default index;
