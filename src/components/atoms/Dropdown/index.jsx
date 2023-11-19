const FilterOption = ({ value, label, selected }) => {
  return (
    <option value={value} onClick={() => value}>
      {label}
    </option>
  );
};

export default FilterOption;
