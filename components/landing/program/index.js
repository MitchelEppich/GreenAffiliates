import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ProgramItem from "./programItem";

const index = props => {
  let companies = props.companyDirectory.map((company, index) => {
    return (
      <li key={index} className="ga-company">
        <ProgramItem {...props} />
      </li>
    );
  });

  return (
    <div className="ga-body-wrap ga-company-page-list">
      <div className="ga-company-directory">
        <div className="ga-company-directory-wrap">
          <h1>Company Directory</h1>

          <ul className="ga-company-list">{companies}</ul>

          <div className="ga-company-list-bottom">
            <a className="ga-btn ga-white-btn" href="#">
              View More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default index;
