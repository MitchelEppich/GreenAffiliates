///DEFINITELY NEEDS TO BE REDUCED WITH A LOOP OF SOME SORT (MAP)

const index = props => {
  return (
    <React.Fragment>
      <div className="ga-grap-wrap">
        <div className="ga-graph-one-goal">
          <span className="ga-goal-name">Sales Goal</span>
          <div className="ga-graph-bar" style={{ width: "100%" }}>
            <span>Goal: $177k</span>
          </div>
        </div>
        <div className="ga-graph-one" style={{ width: "70%" }}>
          <span className="ga-goal-name">Sales</span>
          <div className="ga-graph-bar">
            <span>Actual: $98k</span>
          </div>
        </div>
      </div>

      <div className="ga-grap-wrap">
        <div className="ga-graph-two-goal">
          <span className="ga-goal-name">Comissions Goal</span>
          <div className="ga-graph-bar" style={{ width: "100%" }}>
            <span>Goal: $57k</span>
          </div>
        </div>
        <div className="ga-graph-two">
          <span className="ga-goal-name">Commissions</span>
          <div className="ga-graph-bar" style={{ width: "50%" }}>
            <span>Actual: $23k</span>
          </div>
        </div>
      </div>

      <div className="ga-grap-wrap">
        <div className="ga-graph-three-goal">
          <span className="ga-goal-name">Coversion Goal</span>
          <div className="ga-graph-bar" style={{ width: "100%" }}>
            <span>Goal: 90%</span>
          </div>
        </div>
        <div className="ga-graph-three">
          <span className="ga-goal-name">Conversion Rate</span>
          <div className="ga-graph-bar" style={{ width: "60%" }}>
            <span>Actual: 50%</span>
          </div>
        </div>
      </div>

      <div className="ga-grap-wrap">
        <div className="ga-graph-four-goal">
          <span className="ga-goal-name">Refunds Goal</span>
          <div className="ga-graph-bar" style={{ width: "20%" }}>
            <span>Goal: 0%</span>
          </div>
        </div>
        <div className="ga-graph-four">
          <span className="ga-goal-name">Refunds</span>
          <div className="ga-graph-bar" style={{ width: "21%" }}>
            <span>Actual: 1%</span>
          </div>
        </div>
      </div>

      <div className="ga-grap-wrap">
        <div className="ga-graph-five-goal">
          <span className="ga-goal-name">Affiliate Signups Goal</span>
          <div className="ga-graph-bar">
            <span>Goal: 55 Affiliates</span>
          </div>
        </div>
        <div className="ga-graph-five" style={{ width: "100%" }}>
          <span className="ga-goal-name">Affiliate Signups</span>
          <div className="ga-graph-bar" style={{ width: "45%" }}>
            <span>Actual: 19 Affiliates</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default index;
