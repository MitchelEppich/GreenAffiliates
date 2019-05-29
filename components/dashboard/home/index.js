import Header from "./header";
import TotalCommissions from "./totalCommissions";
import TotalTraffic from "./totalTraffic";
import TopAffiliates from "./topAffiliates";
import SalesGraph from "./salesGraph";
import PendingCommissions from "./pendingCommissions";
import ToBePaid from "./toBePaid";

const index = props => {
  return (
    <div className="ga-panel-wrap">
      <Header />
      <div className="ga-content-section">
        <TotalCommissions />
        <TotalTraffic />
        <TopAffiliates />
        <SalesGraph />
        <PendingCommissions />
        <ToBePaid />
      </div>
    </div>
  );
};
export default index;
