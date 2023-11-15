import FilterButton from "../../atoms/FilterButton";
import "../../styles/section10.css";

const FilterButtons = ({ handleClick, selectedCategory }) => {
  const initialCategory = selectedCategory || "";

  return (
    <div>
      <div className="section__10_filter-button">
        <FilterButton
          onClick={handleClick}
          title="All Items"
          className={
            initialCategory === "" ? "section__10_active" : "section10-btns"
          }
        />
        <FilterButton
          onClick={handleClick}
          title="Ready Stock"
          value="ReadyStock"
          className={
            initialCategory === "ReadyStock"
              ? "section__10_active"
              : "section10-btns"
          }
        />
        <FilterButton
          onClick={handleClick}
          title="Pre Order"
          value="PreOrder"
          className={
            initialCategory === "PreOrder"
              ? "section__10_active"
              : "section10-btns"
          }
        />
        <FilterButton
          onClick={handleClick}
          title="Back Order"
          value="BackOrder"
          className={
            initialCategory === "BackOrder"
              ? "section__10_active"
              : "section10-btns"
          }
        />
        <FilterButton
          onClick={handleClick}
          title="ShowCase"
          value="Showcase"
          className={
            initialCategory === "Showcase"
              ? "section__10_active"
              : "section10-btns"
          }
        />
      </div>
    </div>
  );
};

export default FilterButtons;
