import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const index = props => {
  return (
    <div className="ga-content-title">
      <h1>Payment History</h1>
      <span className="gaSort">
        <a href="#">
          <i>
            <FontAwesomeIcon icon="sort-amount-down" className="" />
          </i>
          <span className="ml-1">Oldest</span>
        </a>
      </span>
      <span className="gaPrint">
        <a href="#">
          <i>
            <FontAwesomeIcon icon="print" className="" />
          </i>
          <span className="ml-1">Print All</span>
        </a>
      </span>
      <span className="ga-date-selection">
        Date Range:
        <input type="text" name="daterange" value="01/01/2018 - 01/15/2018" />
      </span>
    </div>
  );
};

export default index;
