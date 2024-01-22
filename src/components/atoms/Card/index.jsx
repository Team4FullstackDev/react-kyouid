/* eslint-disable react/prop-types */

import "../../styles/section10.css";

const Card = ({
  img,
  title,
  titleDate,
  status,
  price,
  minimumCredits,
  onClickHandler,
  idr,
  dp,
}) => {
  return (
    <div className="section__10_card" onClick={onClickHandler}>
      <img src={img} alt={title} className="section__10_image" />
      <div className="section__10_card-boody">
        <section className="card-btn">
          <span className="section__10_btn_status">{status}</span>
        </section>
        <h3 className="section__10_card-tittle">{title.substring(0, 30)}...</h3>
        <p className="section__10_card-date">{titleDate}</p>
        <section className="section__10_card-price">
          <div className="section__10_price">
            <span>
              {idr} {price}
            </span>
            <br />
            <span className="section__10_dp">
              {dp} {idr}{" "}
              {minimumCredits &&
                minimumCredits.toLocaleString("id-ID", {
                  styles: "currency",
                  currency: "IDR",
                })}
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
