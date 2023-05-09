import "./Info.css";

import PropTypes from "prop-types";

export default function Info({ message }) {
  return (
    <section className="Info">
      <p>{message}</p>
    </section>
  );
}

Info.propTypes = {
  message: PropTypes.string.isRequired,
};
