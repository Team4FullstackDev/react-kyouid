import React, { useState } from "react";
import Card from "../../atoms/Card";
import "../../styles/section10.css";

const Products = ({ data, loadMore, visibleItems }) => {
  const handleLoadMore = () => {
    loadMore();
  };

  return (
    <>
      {data.map((product) => (
        <Card
          key={product.id}
          img={
            product.Image_Products &&
            product.Image_Products[0] &&
            product.Image_Products[0].thumbnail
          }
          title={product.title}
          titleDate={product.createdAt}
          status={product.status}
          price={product.price}
          minimumCredits={product.minimumCredits}
          dp="DP"
          idr="IDR"
          {...product}
        />
      ))}
    </>
  );
};

export default Products;
