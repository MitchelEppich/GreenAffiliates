import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TotalSales from "./totalSales";
import NumberOfCommissions from "./numberOfCommissions";
import ApprovedCommissions from "./approvedCommissions";
import PendingCommissions from "../home/pendingCommissions";
import ToBePaid from "../home/toBePaid";
import CommissionGraph from "./commissionGraph";

const index = props => {
  return (
    <React.Fragment>
      <div class="ga-content-title">
        <h1>Commissions and Payouts</h1>
        <span class="ga-date-selection">
          Date Range:
          <input type="text" name="daterange" value="01/01/2018 - 01/15/2018" />
        </span>
      </div>
      <TotalSales {...props} />
      <NumberOfCommissions {...props} />
      <ApprovedCommissions {...props} />
      <PendingCommissions {...props} />
      <ToBePaid {...props} />
      <CommissionGraph {...props} />
    </React.Fragment>
  );
};
export default index;
