import React, { useState, useEffect } from "react";
import FilterButtons from "../../moleculs/FilterButtons";
import Products from "../../moleculs/Products";
import productsData from "../../../utils/constant/DataSection10";
import "../../styles/section10.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/slice/products.slice";

const Section10 = ({ handleClick, selectedCategory }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visibleItems, setVisibleItems] = useState(24);
  const [noMoreItems, setNoMoreItems] = useState(false);

  const product = useSelector((state) => state.products);
  console.log(product);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // useEffect(() => {
  //   filterData();
  // }, [selectedCategory]);

  // const filterData = () => {
  //   let filteredProducts = { product };

  //   if (selectedCategory) {
  //     filteredProducts = filteredProducts.filter(
  //       ({ category, color, company, newPrice, title }) =>
  //         category === selectedCategory ||
  //         color === selectedCategory ||
  //         company === selectedCategory ||
  //         newPrice === selectedCategory ||
  //         title === selectedCategory
  //     );
  //   }

  //   setFilteredProducts(filteredProducts);
  //   setVisibleItems(24);
  //   setNoMoreItems(false);
  // };

  const loadMore = () => {
    if (visibleItems >= filteredProducts.length) {
      setNoMoreItems(true);
    } else {
      setVisibleItems((prev) => Math.min(prev + 24, filteredProducts.length));
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
          handleClick={handleClick}
          selectedCategory={selectedCategory}
        />
        <div className="section__10_filterable-card">
          <Products
            data={product.products}
            loadMore={loadMore}
            visibleItems={visibleItems}
          />
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
