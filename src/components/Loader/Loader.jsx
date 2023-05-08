import { RotatingLines } from "react-loader-spinner";
import "./Loader.css";

import PropTypes from "prop-types";

export default function Loader({ waitingNote }) {
  return (
    <div className="Loader">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
      <p>{waitingNote}</p>
    </div>
  );
}

Loader.propTypes = {
  waitingNote: PropTypes.string.isRequired,
};
