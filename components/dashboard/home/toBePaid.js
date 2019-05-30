import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const index = props => {
  return (
    <div className="ga-content-panel ga-half-panel ga-pend-comm">
      <span className="ga-panel-icon">
        <i>
          <FontAwesomeIcon icon="money-bill-wave-alt" className="" />
        </i>
      </span>
      <h2>Amount to be Paid Out</h2>
      <p>May 2019</p>
      <span className="ga-panel-data">$161,595</span>
    </div>
  );
};

export default index;
