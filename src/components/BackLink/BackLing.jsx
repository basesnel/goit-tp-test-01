import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./BackLink.css";

const BackLink = ({ to, children }) => {
  return (
    <Link to={to} className="BackLink">
      {children}
    </Link>
  );
};

BackLink.propTypes = {
  to: PropTypes.any.isRequired,
};

export default BackLink;
