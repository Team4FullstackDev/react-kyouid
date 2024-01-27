import { useState } from "react";
import FilterButton from "../../atoms/FilterButton";
import "../../styles/section10.css";

const FilterButtons = ({ handleClick, selectedCategory }) => {
  const [activeCategory, setActiveCategory] = useState(selectedCategory || "");

  const [filterData, setFilterData] = useState({
    status: [],
    category: [],
    character: [],
    series: [],
  });

  const handleButton = (value, name) => {
    if (handleClick) {
      handleClick(value, name);
      console.log(value, name);
    }
    setActiveCategory(value);
  };

  const categories = [
    { title: "All Items", value: "" },
    {
      title: "Ready Stock",
      name: "status",
      value: "Ready Stock",
    },
    { title: "Late pre-order", name: "status", value: "Late pre-order" },
    { title: "Nendoroid", name: "category", value: "Nendoroid" },
    { title: "Scaled Figure", name: "category", value: "scaled figure" },
  ];

  return (
    <div className="section__10_filter-button">
      {categories.map((cat) => (
        <FilterButton
          key={cat.value}
          onClick={() => handleButton(cat.value || "", cat.name || "")}
          title={cat.title}
          className={cat.value === activeCategory ? "section__10_active" : ""}
        />
      ))}
    </div>
  );
};

export default FilterButtons;
