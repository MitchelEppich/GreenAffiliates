import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const index = props => {
  return (
    <div className="ga-content-panel ga-third-panel ga-denied-Affiliates">
      <span className="ga-panel-icon">
        <i>
          <FontAwesomeIcon icon="ban" classNameName="" />
        </i>
      </span>
      <h2>Denied Affiliates</h2>
      <span className="ga-panel-data">11</span>
      <a href="./pending-affiliates.html" className="ga-btn ga-view-btn">
        View List
      </a>
    </div>
  );
};
export default index;
