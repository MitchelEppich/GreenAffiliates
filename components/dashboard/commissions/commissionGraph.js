const index = props => {
  return (
    <div class="ga-content-panel ga-full-panel ga-commissions-graph">
      <ul class="chart">
        <li>
          <span class="ga-bg-date">03/2019</span>
          <span class="ga-barlevel" style={{ height: "50%" }} title="March">
            <span class="ga-bar-amt">$60k Comm.</span>
          </span>
        </li>
        <li>
          <span class="ga-bg-date">04/2019</span>
          <span class="ga-barlevel" style={{ height: "70%" }} title="April">
            <span class="ga-bar-amt">$84k Comm.</span>
          </span>
        </li>
        <li>
          <span class="ga-bg-date">05/2019</span>
          <span class="ga-barlevel" style={{ height: "65%" }} title="May">
            <span class="ga-bar-amt">$71k Comm.</span>
          </span>
        </li>
        <li>
          <span class="ga-bg-date">06/2019</span>
          <span class="ga-barlevel" style={{ height: "90%" }} title="June">
            <span class="ga-bar-amt">$59k Comm.</span>
          </span>
        </li>
      </ul>
      <div class="ga-commissions-links">
        <a href="#">Weekly</a>
        <a class="active" href="#">
          Monthly
        </a>
      </div>
    </div>
  );
};

export default index;
