import React from "react";
import ParametersButton from "../../atoms/ParametersButton";

const FilterSortButtons = ({ onFilterClick, onSortClick }) => {
  return (
    <div className="section_11_parameters">
      <ParametersButton
        type="button"
        onClick={onFilterClick}
        iconSrc="https://kyou.id/static/img/icon/filter.svg"
        altText="Filter Icon"
      >
        Filters
      </ParametersButton>
      <ParametersButton
        type="button"
        onClick={onSortClick}
        iconSrc="https://kyou.id/static/img/icon/sort.svg"
        altText="Sort Icon"
      >
        Latest
      </ParametersButton>
    </div>
  );
};

export default FilterSortButtons;
