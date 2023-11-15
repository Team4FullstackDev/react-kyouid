import React from "react";

const FilterButton = ({ onClick, value, title, className }) => {
  return (
    <button onClick={onClick} value={value} className={className}>
      {title}
    </button>
  );
};

export default FilterButton;
