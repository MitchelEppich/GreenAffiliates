const index = props => {
  return (
    <React.Fragment>
      <div className="ga-content-panel ga-full-panel ga-performance ga-signed-up">
        <h2>
          All Affiliates <span>(59)</span>
        </h2>
        <table className="ga-performance-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Ref ID</th>
              <th>$Sales Generated</th>
              <th>Date Signed</th>
            </tr>
          </thead>
          <tbody>
            <tr className="ga-affiliate">
              <td className="ga-name">
                <a href="./merchant-affiliate.html">Bob Parker</a>
              </td>
              <td className="ga-id">414</td>
              <td className="ga-Commissions-gen">$173,394</td>
              <td className="ga-date-signed">Jan 9, 2019</td>
            </tr>
            <tr className="ga-affiliate">
              <td className="ga-name">
                <a href="#">Steve Shultz</a>
              </td>
              <td className="ga-id">095</td>
              <td className="ga-Commissions-gen">$59,161</td>
              <td className="ga-date-signed">Feb 1, 2019</td>
            </tr>
            <tr className="ga-affiliate">
              <td className="ga-name">
                <a href="#">Amy Adams</a>
              </td>
              <td className="ga-id">231</td>
              <td className="ga-Commissions-gen">$102,695</td>
              <td className="ga-date-signed">Mar 23, 2019</td>
            </tr>
            <tr className="ga-affiliate">
              <td className="ga-name">
                <a href="#">Ortiz Iric</a>
              </td>
              <td className="ga-id">119</td>
              <td className="ga-Commissions-gen">$151,453</td>
              <td className="ga-date-signed">Jan 2, 2019</td>
            </tr>
            <tr className="ga-affiliate">
              <td className="ga-name">
                <a href="#">Pimber Tex</a>
              </td>
              <td className="ga-id">077</td>
              <td className="ga-Commissions-gen">$39,159</td>
              <td className="ga-date-signed">Feb 19, 2019</td>
            </tr>
            <tr className="ga-affiliate">
              <td className="ga-name">
                <a href="#">Amy Rogers</a>
              </td>
              <td className="ga-id">205</td>
              <td className="ga-Commissions-gen">$287,551</td>
              <td className="ga-date-signed">Jan 15, 2019</td>
            </tr>
            <tr className="ga-affiliate">
              <td className="ga-name">
                <a href="#">Abdul Allaz</a>
              </td>
              <td className="ga-id">109</td>
              <td className="ga-Commissions-gen">$99,783</td>
              <td className="ga-date-signed">Jan 29, 2019</td>
            </tr>
            <tr className="ga-affiliate">
              <td className="ga-name">
                <a href="#">Eric Allan</a>
              </td>
              <td className="ga-id">053</td>
              <td className="ga-Commissions-gen">$78,531</td>
              <td className="ga-date-signed">Feb 05, 2019</td>
            </tr>
            <tr className="ga-affiliate">
              <td className="ga-name">
                <a href="#">Adam Orwell</a>
              </td>
              <td className="ga-id">159</td>
              <td className="ga-Commissions-gen">$149,155</td>
              <td className="ga-date-signed">Jan 21, 2019</td>
            </tr>
          </tbody>
        </table>
        <a className="ga-btn ga-more-btn">View More</a>
      </div>
    </React.Fragment>
  );
};

export default index;
