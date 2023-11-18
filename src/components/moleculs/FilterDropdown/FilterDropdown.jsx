import React from "react";
import FilterOption from "../../atoms/Dropdown";

const FilterDropdown = ({ options, selectedValue, handleChange }) => {
  return (
    <div className="section_11_right">
      <span>Sort By</span>
      <select
        value={selectedValue}
        onChange={(e) => handleChange(e.target.value)}
      >
        {options.map((option) => (
          <FilterOption
            key={option.value}
            value={option.value}
            label={option.label}
          />
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
