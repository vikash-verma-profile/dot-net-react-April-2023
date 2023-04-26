import React from "react";
import PropTypes  from "prop-types";

const Link = ({ active, Children, onClick }) => {
  if (active) {
    return <span>{Children}</span>;
  }

  return (
    <a
      href=""
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {" "}
      {Children}
    </a>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  Children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
