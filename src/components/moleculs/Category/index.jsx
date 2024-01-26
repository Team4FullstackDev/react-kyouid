import React, { useEffect, useState } from "react";
import { ResetButton, CategoryItem } from "../../atoms/ButtonCategory";
import "../../styles/section11.css";
import { useDispatch } from "react-redux";
import { getProductsByFilter } from "../../../redux/slice/productsFilter";

const Category = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const [filterData, setFilterData] = useState({
    status: [],
    category: [],
    character: [],
    series: [],
  });
  const dispatch = useDispatch();

  const handleReset = () => {
    setFilterData({
      status: [],
      category: [],
      character: [],
      series: [],
    });
    setActiveCategory("");
  };

  const handleFilterChange = (title, name) => {
    setFilterData((prevData) => {
      return {
        ...prevData,
        [name]: prevData[name].includes(title)
          ? prevData[name].filter((item) => item !== title)
          : [...prevData[name], title],
      };
    });
    setActiveCategory(title);
  };

  useEffect(() => {
    dispatch(getProductsByFilter(filterData));
  });
  const category = [
    {
      title: "Merchandise",
      name: "category",
    },
    {
      title: "Prize Figure",
      name: "category",
    },
    {
      title: "Nendoroid",
      name: "category",
    },
    {
      title: "Scaled Figure",
      name: "category",
    },
    {
      title: "Pop Up Parade",
      name: "category",
    },
    {
      title: "Model Kit",
      name: "category",
    },
    {
      title: "Figma",
      name: "category",
    },
    {
      title: "Plush",
      name: "category",
    },
    {
      title: "Light Novel",
      name: "category",
    },
    {
      title: "Manga",
      name: "category",
    },
  ];
  const series = [
    {
      title: "Jujutsu Kaisen",
      name: "series",
    },
    {
      title: "Genshin Impact",
      name: "series",
    },
    {
      title: "Chainsaw Man",
      name: "series",
    },
    {
      title: "Kimetsu No Yaiba",
      name: "series",
    },
  ];
  const character = [
    {
      title: "Gojo Satoru",
      name: "character",
    },
    {
      title: "Hatsune Miku",
      name: "character",
    },
    {
      title: "Muichiro Tokito",
      name: "character",
    },
    {
      title: "Itadori Yuji",
      name: "character",
    },
  ];

  return (
    <>
      <span className="section_11_category">
        Character & Series
        <ResetButton onClick={handleReset}>Reset All</ResetButton>
      </span>

      {/* filter by category */}
      <CategoryItem
        clasname="section_11_subcategory"
        item="Category"
        onClick={handleReset}
      >
        <ResetButton>Reset</ResetButton>
      </CategoryItem>

      <div className="section_11_gory">
        {category.map((cat) => (
          <CategoryItem
            item={cat.title}
            name={cat.name}
            key={cat.title}
            onClick={() => handleFilterChange(cat.title, cat.name)}
            clasname={
              cat.title === activeCategory
                ? "section_11__filterActive"
                : "section_11__filter"
            }
          />
        ))}
      </div>
      {/* end filter by category */}

      {/* filter by series */}
      <CategoryItem
        clasname="section_11_subcategory"
        item="Series"
        onClick={handleReset}
      >
        <ResetButton>Reset</ResetButton>
      </CategoryItem>
      <div className="section_11_gory">
        {series.map((series) => (
          <CategoryItem
            item={series.title}
            name={series.name}
            key={series.title}
            onClick={() => handleFilterChange(series.title, series.name)}
          />
        ))}
      </div>
      {/* end filter by series */}

      {/* filter by character */}
      <CategoryItem
        clasname="section_11_subcategory"
        item="Character"
        onClick={handleReset}
      >
        <ResetButton>Reset</ResetButton>
      </CategoryItem>
      <div className="section_11_gory">
        {character.map((char) => (
          <CategoryItem
            item={char.title}
            name={char.name}
            key={char.title}
            onClick={() => handleFilterChange(char.title, char.name)}
          />
        ))}
      </div>
      {/* end filter by character */}
    </>
  );
};

export default Category;
