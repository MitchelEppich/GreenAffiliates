import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const index = props => {
  let options = props.menuOptions.map((option, i) => {
    return (
      <Link key={i} href={option.link}>
        <a className="w-full" aria-label={option.label}>
          <li className="w-full text-center my-4 text-enter text-green-darker hover:text-white slowish cursor-pointer">
            <FontAwesomeIcon icon={option.icon} className="fa-4x p-1" />
            {props.menuHoverIndex == i ? (
              <span className="absolute ml-24 bg-white rounded-lg shadow text-green">
                {option.label}
              </span>
            ) : null}
          </li>
        </a>
      </Link>
    );
  });
  return <ul className="list-reset flex flex-wrap w-32 pt-2">{options}</ul>;
};

export default index;
