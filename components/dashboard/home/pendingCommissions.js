import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const index = props => {
  return (
    <div className="ga-content-panel ga-half-panel ga-pend-comm">
      <span className="ga-panel-icon">
        <i>
          <FontAwesomeIcon icon="clock" className="" />
        </i>
      </span>
      <h2>Pending Commissions</h2>
      <p>April 2019</p>
      <span className="ga-panel-data">$63,115</span>
    </div>
  );
};

export default index;
