import React, { useState, useEffect } from "react";
import FilterDropdown from "../../../moleculs/FilterDropdown";
import FilterSortButtons from "../../../moleculs/FilterSortButtons";
import productsData from "../../../../utils/constant/DataSection10";
import { getPaginatedData } from "../../../../utils/constant/DataSection10";
import Card from "../../../atoms/Card";
import SidebarMobile from "../Sidebar/SidebarMobile";

const PAGE_SIZE = 24;

const getTotalPages = (totalItems, pageSize) => {
  return Math.ceil(totalItems.length / pageSize);
};

const Content = () => {
  const filterOptions = [
    { value: "relevance", label: "Relevance", selected: false },
    { value: "newest", label: "Latest", selected: true },
    { value: "oldest", label: "Oldest", selected: false },
    { value: "highest_price", label: "Highest Price", selected: false },
    { value: "lowest_price", label: "Lowest Price", selected: false },
    { value: "wishlists", label: "Most Liked", selected: false },
  ];

  const [pageNumber, setPageNumber] = useState(1);
  const [showSidebarMobile, setShowSidebarMobile] = useState(false);

  const handlePrevPage = () => {
    setPageNumber((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    const totalPages = getTotalPages(productsData, PAGE_SIZE);
    setPageNumber((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePageClick = (page) => {
    setPageNumber(page);
  };

  const paginatedData = getPaginatedData(productsData, pageNumber, PAGE_SIZE);
  const totalPages = getTotalPages(productsData, PAGE_SIZE);

  const handleFilterClick = () => {
    setShowSidebarMobile(!showSidebarMobile);
  };

  return (
    <div className="section_11_main">
      <header className="section_11_heading">
        <div className="section_11_left">
          <h3>All Items</h3>
          <span className="section_11_count">Showing 1 — 4 of 70</span>
        </div>
        <div className="section_11_right">
          <span>Sort By</span>
          <FilterDropdown options={filterOptions} />
        </div>
      </header>

      <FilterSortButtons onFilterClick={handleFilterClick} />

      {showSidebarMobile && <SidebarMobile handlechange={() => {}} />}

      <div className="section__10_filterable-card">
        {paginatedData.map((product, index) => (
          <Card key={index} {...product} />
        ))}
      </div>

      <div className="section_11__pagination">
        <div className="section_11__pagination__paging">
          <button
            className="section_11__disabled"
            type="button"
            onClick={handlePrevPage}
            disabled={pageNumber === 1}
          >
            ⟨
          </button>
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page + 1}
              type="button"
              onClick={() => handlePageClick(page + 1)}
              className={
                page + 1 === pageNumber
                  ? "section_11__active"
                  : "section_11__pagination__button"
              }
            >
              {page + 1}
            </button>
          ))}
          <button
            className="section_11__disabled"
            type="button"
            onClick={handleNextPage}
            disabled={pageNumber === totalPages}
          >
            ⟩
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
