import TopAffiliates from "../home/topAffiliates";
import AllAffiliates from "./allAffiliates";
import AffiliateMessages from "./affiliateMessages";
import PendingAffiliates from "./pendingAffiliates";
import DeniedAffiliates from "./deniedAffiliates";

const index = props => {
  return (
    <React.Fragment>
      <h1>Affiliates</h1>;
      <TopAffiliates {...props} />
      <AllAffiliates {...props} />
      <AffiliateMessages {...props} />
      <PendingAffiliates {...props} />
      <DeniedAffiliates {...props} />
    </React.Fragment>
  );
};
export default index;
