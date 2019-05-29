const index = props => {
  return (
    <div className="ga-content-panel ga-full-panel ga-commissions-graph">
      <ul className="chart">
        <li>
          <span className="ga-bg-date">03/2019</span>
          <span className="ga-barlevel" style={{height:"50%"}} title="March">
            <span className="ga-bar-amt">$190k Sales</span>
          </span>
        </li>
        <li>
          <span className="ga-bg-date">04/2019</span>
          <span className="ga-barlevel" style={{height:"70%"}} title="April">
            <span className="ga-bar-amt">$240k Sales</span>
          </span>
        </li>
        <li>
          <span className="ga-bg-date">05/2019</span>
          <span className="ga-barlevel" style={{height:"65%"}} title="May">
            <span className="ga-bar-amt">$210k Sales</span>
          </span>
        </li>
        <li>
          <span className="ga-bg-date">06/2019</span>
          <span className="ga-barlevel" style={{height:"90%"}} title="June">
            <span className="ga-bar-amt">$290k Sales</span>
          </span>
        </li>
      </ul>
      <div className="ga-commissions-links">
        <a href="#">Weekly</a>
        <a className="active" href="#">
          Monthly
        </a>
      </div>
    </div>
  );
};

export default index;
