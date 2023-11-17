import Dropdown from "../../atoms/Dropdown";

const FilterDropdown = ({ options, selectedValue, handleChange }) => {
  return (
    <select value={selectedValue} onChange={handleChange}>
      {options.map((option) => (
        <Dropdown
          key={option.value}
          value={option.value}
          label={option.label}
        />
      ))}
    </select>
  );
};

export default FilterDropdown;
