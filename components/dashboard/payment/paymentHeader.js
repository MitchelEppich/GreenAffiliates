import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const index = props => {
  return (
    <div class="ga-content-title">
      <h1>Payment History</h1>
      <span class="gaSort">
        <a href="#">
          <i>
            <FontAwesomeIcon icon="sort-amount-down" className="" />
          </i>
          <span>Oldest</span>
        </a>
      </span>
      <span class="gaPrint">
        <a href="#">
          <i class="fas fa-print" />
          <i>
            <FontAwesomeIcon icon="print" className="" />
          </i>
          <span>Print All</span>
        </a>
      </span>
      <span class="ga-date-selection">
        Date Range:
        <input type="text" name="daterange" value="01/01/2018 - 01/15/2018" />
      </span>
    </div>
  );
};

export default index;
