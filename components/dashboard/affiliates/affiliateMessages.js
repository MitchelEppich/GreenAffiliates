import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const index = props => {
  return (
    <div class="ga-content-panel ga-third-panel ga-affiliate-Messages">
      <span class="ga-panel-icon">
        <i>
          <FontAwesomeIcon icon="comments" className="" />
        </i>
      </span>
      <h2>Affiliate Messages</h2>
      <span class="ga-panel-data">11</span>
      <a href="./merchant-messages.html" class="ga-btn ga-view-btn">
        View Messages
      </a>
    </div>
  );
};

export default index;
