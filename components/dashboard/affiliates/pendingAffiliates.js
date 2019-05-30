import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const index = props => {
  return (
    <div class="ga-content-panel ga-third-panel ga-pending-Affiliates">
      <span class="ga-panel-icon">
        <i>
          <FontAwesomeIcon icon="user-clock" className="" />
        </i>
      </span>
      <h2>Pending Affiliates</h2>
      <span class="ga-panel-data">8</span>
      <a href="./pending-affiliates.html" class="ga-btn ga-view-btn">
        View Applications
      </a>
    </div>
  );
};
export default index;
