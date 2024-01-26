import React, { useState, useEffect } from "react";
import FilterButtons from "../../moleculs/FilterButtons";
import Products from "../../moleculs/Products";
import productsData from "../../../utils/constant/DataSection10";
import "../../styles/section10.css";
import { useDispatch, useSelector } from "react-redux";

import { getProductsByFilter } from "../../../redux/slice/productsFilter";

const Section10 = ({ selectedCategory }) => {
  const [visibleItems, setVisibleItems] = useState(24);
  const [noMoreItems, setNoMoreItems] = useState(false);

  const product = useSelector((state) => state.productsFilter);
  const dispatch = useDispatch();

  const handleFilterChange = (filterCategory, filterName) => {
    const filterParams = { [filterName]: filterCategory };
    dispatch(getProductsByFilter(filterParams));
    console.log(filterParams);
  };

  useEffect(() => {
    dispatch(getProductsByFilter());
  }, [dispatch]);
  console.log(product);

  const loadMore = () => {
    if (visibleItems >= product.products.length) {
      setNoMoreItems(true);
    } else {
      setVisibleItems((prev) => Math.min(prev + 24, product.products.length));
    }
  };

  const resetView = () => {
    setNoMoreItems(false);
    setVisibleItems(24);
  };

  return (
    <section className="section__10">
      <h3 className="section__10_filter-tittle">Newest Items</h3>
      <div className="section__10_filter">
        <FilterButtons
          handleClick={handleFilterChange}
          selectedCategory={selectedCategory}
        />
        <div className="section__10_filterable-card">
          <Products data={product.productsFilter} loadMore={loadMore} />
        </div>
        <div className="section__10_btnn-next">
          {noMoreItems ? (
            <button className="section__10_btnn-load" onClick={resetView}>
              Tidak ada Item Lainya
            </button>
          ) : (
            <button className="section__10_btnn-load" onClick={loadMore}>
              Klik Untuk Melihat Item Baru Lainya
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Section10;
