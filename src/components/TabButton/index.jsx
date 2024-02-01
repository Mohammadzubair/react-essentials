import PropTypes from "prop-types";
import "./TabButton.css";

const TabButton = ({ children, isSelected, ...props }) => {
  return (
    <li>
      <button className={isSelected ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;

TabButton.propTypes = {
  children: PropTypes.node.isRequired,
  isSelected: PropTypes.bool,
};
