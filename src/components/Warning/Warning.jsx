import "./Warning.css";

import PropTypes from "prop-types";

export default function Warning({ message }) {
  return (
    <section className="Warning">
      <p>{message}</p>
    </section>
  );
}

Warning.propTypes = {
  message: PropTypes.string.isRequired,
};
