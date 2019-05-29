import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const index = props => {
  return (
    <div className="ga-content-panel ga-full-panel ga-performance">
      <span className="ga-panel-icon">
        <i className="fas fa-award" /> <i className="fas fa-chart-line" />{" "}
        <i>
          <FontAwesomeIcon icon="award" className="" />
        </i>
      </span>
      <h2>Top Performing Affiliates</h2>
      <table className="ga-performance-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ref ID</th>
            <th>$Commissions Gen.</th>
            <th>Comm%</th>
            <th>Traffic</th>
          </tr>
        </thead>
        <tbody>
          <tr className="ga-affiliate">
            <td target="_blank" className="ga-name">
              <a href="./merchant-affiliate.html">Bob Parker</a>
            </td>
            <td className="ga-id">414</td>
            <td className="ga-Commissions-gen">$173,394</td>
            <td className="ga-commission">20%</td>
            <td className="ga-traffic">
              295,132<span>k</span>
            </td>
          </tr>
          <tr className="ga-affiliate">
            <td className="ga-name">
              <a href="#">Steve Shultz</a>
            </td>
            <td className="ga-id">095</td>
            <td className="ga-Commissions-gen">$59,161</td>
            <td className="ga-commission">15%</td>
            <td className="ga-traffic">
              101,341<span>k</span>
            </td>
          </tr>
          <tr className="ga-affiliate">
            <td className="ga-name">
              <a href="#">Amy Adams</a>
            </td>
            <td className="ga-id">231</td>
            <td className="ga-Commissions-gen">$102,695</td>
            <td className="ga-commission">15%</td>
            <td className="ga-traffic">
              351,203<span>k</span>
            </td>
          </tr>
          <tr className="ga-affiliate">
            <td className="ga-name">
              <a href="#">Ortiz Iric</a>
            </td>
            <td className="ga-id">119</td>
            <td className="ga-Commissions-gen">$151,453</td>
            <td className="ga-commission">15%</td>
            <td className="ga-traffic">
              159,263<span>k</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default index;
