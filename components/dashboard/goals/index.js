import GoalSettings from "./goalSettings";
import GoalFilters from "./goalFilters";
import GoalGraphs from "./goalGraphs";

const index = props => {
  return (
    <React.Fragment>
      <div className="ga-goal-header">
        <h1>Month Goals</h1>

        <div className="ga-set-goals">
          <a id="gaSetGoals" className="ga-btn ga-view-btn" href="#">
            Set Goals
          </a>
        </div>
      </div>
      <div className="ga-row-graphs">
        <GoalFilters {...props} />
        <GoalSettings {...props} />

        <GoalGraphs {...props} />
      </div>
    </React.Fragment>
  );
};
export default index;
