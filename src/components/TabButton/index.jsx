import PropTypes from "prop-types";
import "./TabButton.css";

const TabButton = ({ children, onSelect, isSelected }) => {
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;

TabButton.propTypes = {
  children: PropTypes.node.isRequired,
  onSelect: PropTypes.func,
  isSelected: PropTypes.bool,
};
