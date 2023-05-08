import PropTypes from "prop-types";
import "./LoadMoreButton.css";

export default function LoadMoreButton({ onClick }) {
  return (
    <button onClick={onClick} className="LoadMoreButton">
      Load more
    </button>
  );
}

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
