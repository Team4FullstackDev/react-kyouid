import React from "react";
import { ResetButton, CategoryItem } from "../../atoms/ButtonCategory";
import "../../styles/section11.css";

const Category = () => {
  const handleReset = () => {
    // Logika untuk mereset semua
    // ...
  };

  const handleItemClick = (item) => {
    // Logika untuk menangani pemilihan item
    // ...
  };

  return (
    <>
      <span className="section_11_category">
        Character & Series
        <ResetButton onClick={handleReset}>Reset All</ResetButton>
      </span>
      <CategoryItem
        clasname="section_11_subcategory"
        item="Category"
        onClick={handleReset}
      >
        <ResetButton>Reset</ResetButton>
      </CategoryItem>
      <div className="section_11_gory">
        <CategoryItem
          item="Merchandise - Acrylic (15470)"
          onClick={() => handleItemClick("Merchandise - Acrylic (15470)")}
        />
        <CategoryItem
          item="Merchandise (12572)"
          onClick={() => handleItemClick("Merchandise (12572)")}
        />
        <CategoryItem
          item="Prize Figure (8122)"
          onClick={() => handleItemClick("Prize Figure (8122)")}
        />
      </div>
      <CategoryItem
        clasname="section_11_subcategory"
        item="Series"
        onClick={handleReset}
      >
        <ResetButton>Reset</ResetButton>
      </CategoryItem>
      <div className="section_11_gory">
        <CategoryItem
          item="Kimetsu no Yaiba (4415)"
          onClick={() => handleItemClick("Kimetsu no Yaiba (4415)")}
        />
        <CategoryItem
          item="Fate (4312)"
          onClick={() => handleItemClick("Fate (4312)")}
        />
        <CategoryItem
          item="Hololive (3643)"
          onClick={() => handleItemClick("Hololive (3643)")}
        />
      </div>
      <CategoryItem
        clasname="section_11_subcategory"
        item="Character"
        onClick={handleReset}
      >
        <ResetButton>Reset</ResetButton>
      </CategoryItem>
      <div className="section_11_gory">
        <CategoryItem
          item="Non Character (1994)"
          onClick={() => handleItemClick("Non Character (1994)")}
        />
        <CategoryItem
          item="Hatsune Miku (1466)"
          onClick={() => handleItemClick("Hatsune Miku (1466)")}
        />
        <CategoryItem
          item="Original Character (814)"
          onClick={() => handleItemClick("Original Character (814)")}
        />
      </div>
      <CategoryItem
        clasname="section_11_subcategory"
        item="Brand"
        onClick={handleReset}
      >
        <ResetButton>Reset</ResetButton>
      </CategoryItem>
      <div className="section_11_gory">
        <CategoryItem
          item="COSPA (4764)"
          onClick={() => handleItemClick("COSPA (4764)")}
        />
        <CategoryItem
          item="Bandai Spirits (4692)"
          onClick={() => handleItemClick("Bandai Spirits (4692)")}
        />
        <CategoryItem
          item="Good Smile Company (4585)"
          onClick={() => handleItemClick("Good Smile Company (4585)")}
        />
      </div>
    </>
  );
};

export default Category;
