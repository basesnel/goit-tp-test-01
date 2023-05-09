import PropTypes from "prop-types";
import Select from "react-select";
import "./Filter.css";

export default function Filter(props) {
  const { options, selectOption } = props;

  return (
    <Select
      options={options}
      className="Filter"
      onChange={(option) => selectOption(option.value)}
    />
  );
}

Filter.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectOption: PropTypes.func.isRequired,
};
