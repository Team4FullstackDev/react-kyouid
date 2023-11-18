import React, { useState } from "react";
import Card from "../../atoms/Card";
import "../../styles/section10.css";

const Products = ({ data, loadMore, visibleItems }) => {
  const handleLoadMore = () => {
    loadMore();
  };
  return (
    <>
      {data.map((product, index) => (
        <Card
          key={index}
          img={product.img}
          title={product.title}
          titleDate={product.titleDate}
          reviews={product.reviews}
          prevPrice={product.prevPrice}
          newPrice={product.newPrice}
          {...product}
        />
      ))}
    </>
  );
};

export default Products;
