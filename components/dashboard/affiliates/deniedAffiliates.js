import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const index = props => {
  return (
    <div class="ga-content-panel ga-third-panel ga-denied-Affiliates">
      <span class="ga-panel-icon">
        <i>
          <FontAwesomeIcon icon="ban" className="" />
        </i>
      </span>
      <h2>Denied Affiliates</h2>
      <span class="ga-panel-data">11</span>
      <a href="./pending-affiliates.html" class="ga-btn ga-view-btn">
        View List
      </a>
    </div>
  );
};
export default index;
