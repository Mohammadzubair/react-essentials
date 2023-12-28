import PropTypes from "prop-types";
import "./TabButton.css";

const TabButton = ({ children }) => {
  return (
    <li>
      <button>{children}</button>
    </li>
  );
};

export default TabButton;

TabButton.propTypes = {
  children: PropTypes.node.isRequired,
};
