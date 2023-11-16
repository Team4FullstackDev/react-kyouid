/* eslint-disable react/prop-types */

import "../../styles/section10.css";

const Card = ({ img, title, titleDate, reviews, prevPrice, newPrice }) => {
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
        <h3 className="section__10_card-tittle">{title.substring(0, 30)}...</h3>
        <p className="section__10_card-date">{titleDate}</p>
        <section className="section__10_card-price">
          <div className="section__10_price">
            <span> {prevPrice}</span>
            <br />
            <span className="section__10_dp">{newPrice}</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
