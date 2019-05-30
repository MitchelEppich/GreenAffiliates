import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const index = props => {
  return (
    <div className="ga-content-panel ga-third-panel ga-affiliate-Messages">
      <span className="ga-panel-icon">
        <i>
          <FontAwesomeIcon icon="comments" classNameName="" />
        </i>
      </span>
      <h2>Affiliate Messages</h2>
      <span className="ga-panel-data">11</span>
      <a href="./merchant-messages.html" className="ga-btn ga-view-btn">
        View Messages
      </a>
    </div>
  );
};

export default index;
