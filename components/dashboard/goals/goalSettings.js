const index = props => {
  return (
    <div className="ga-goal-input">
      <div className="ga-goal-input-wrap">
        <p>Tip: input only numbers</p>
        <p className="ga-input-description">
          The value of the totals entered for the month will be used to
          calculate daily/weekly/monthly/yearly goals displayed on the Goals
          dashboard.
        </p>
        <div className="ga-goals-segment">
          <span>Sales Goal</span>
          <p className="ga-input-description">
            Enter the total # of desired sales for the month.
          </p>
          <input className="ga-graph-one-input" type="number" min="0" />
        </div>

        <div className="ga-goals-segment">
          <span>Commissions Goal</span>
          <p className="ga-input-description">
            Enter the total # of desired commissions to be paid out for the
            month.
          </p>
          <input className="ga-graph-two-input" type="number" min="0" />
        </div>

        <div className="ga-goals-segment">
          <span>Conversions Goal</span>
          <p className="ga-input-description">
            Enter the total # of desired conversions for the month.
          </p>
          <input className="ga-graph-three-input" type="number" min="0" />
        </div>

        <div className="ga-goals-segment">
          <span>Refunds Goal</span>
          <p className="ga-input-description">
            Enter the least amount of desired sales refunds for the month.
          </p>
          <input className="ga-graph-four-input" type="number" min="0" />
        </div>

        <div className="ga-goals-segment">
          <span>Affiliate Signups Goal</span>
          <p className="ga-input-description">
            Enter the desired amount of new affiliate signups you would like to
            achieve for the month.
          </p>
          <input className="ga-graph-five-input" type="number" min="0" />
        </div>
      </div>
    </div>
  );
};
export default index;
