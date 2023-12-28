import PropTypes from "prop-types";
import "./CoreConcept.css";

const CoreConcepts = ({ title, description, image }) => {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default CoreConcepts;

CoreConcepts.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.node,
};
