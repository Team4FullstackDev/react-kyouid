import React, { useState } from "react";
import Card from "../../atoms/Card";
import "../../styles/section10.css";

const Products = ({ data, loadMore, visibleItems }) => {
  const handleLoadMore = () => {
    loadMore();
  };
  return (
    <>
      <div className="section__10_filterable-card">
        {data.map((product) => (
          <Card
            key={product.id}
            img={product.img}
            title={product.title}
            titleDate={product.titleDate}
            reviews={product.reviews}
            prevPrice={product.prevPrice}
            newPrice={product.newPrice}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
