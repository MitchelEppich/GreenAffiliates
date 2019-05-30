import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const programItem = props => {
  return (
    <React.Fragment>
      <h3>CannaHydro Co.</h3>{" "}
      <p className="ga-company-excerpt">
        Developer of specially made hydroponics for the Cannabis Ind...
      </p>{" "}
      <FontAwesomeIcon
        icon={faChevronDown}
        className="fa-2x text-green-dark cursor-pointer hover:text-green-darker hover:text-green-darker"
      />
      <div className="ga-company-tab">
        <p>
          Developer of specially made hydroponics for the Cannabis Industry
          CannaHydro supplies the top cannabis producers with state of the art
          equipment. From custom made greenhouses to hoses and hydro trays
          CannaHydro make a product for every step of the process. CannaHydro
          offers 15% commission on all products.
        </p>

        <a className="ga-btn ga-green-btn" href="#">
          Apply
        </a>
      </div>
    </React.Fragment>
  );
};

export default programItem;
