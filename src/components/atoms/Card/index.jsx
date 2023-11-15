import React from "react";
import "../../styles/section10.css";

const Card = ({ img, title, reviews, prevPrice, newPrice }) => {
  const reviewStyle = {
    backgroundColor: reviews.backgroundColor,
  };
  return (
    <div className="section__10_card">
      <img src={img} alt={title} className="section__10_image" />
      <div className="section__10_card-boody">
        <section className="card-btn">
          <span className="section__10_btn_status" style={reviewStyle}>
            {reviews.text}
          </span>
        </section>
        <h3 className="section__10_card-tittle">{title}</h3>
        <section className="section__10_card-price">
          <div className="section__10_price">
            <span>{prevPrice}</span>
            <br />
            <span className="section__10_dp">{newPrice}</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
