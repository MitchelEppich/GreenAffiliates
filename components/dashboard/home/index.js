import TotalCommissions from "./totalCommissions";
import TotalTraffic from "./totalTraffic";
import TopAffiliates from "./topAffiliates";
import SalesGraph from "./salesGraph";
import PendingCommissions from "./pendingCommissions";
import ToBePaid from "./toBePaid";

const index = props => {
  return (
    <React.Fragment>
      <TotalCommissions />
      <TotalTraffic />
      <TopAffiliates />
      <SalesGraph />
      <PendingCommissions />
      <ToBePaid />
    </React.Fragment>
  );
};
export default index;
