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
          <span
            className={
              status === "Ready Stock"
                ? "section__10_card-ready-stock"
                : status === "Pre-Order"
                ? "section__10_card-pre-order"
                : status === "Late Pre-Order"
                ? "section__10_btn_status"
                : "section__10_btn_status"
            }
          >
            {status}
          </span>
        </section>
        <h3 className="section__10_card-tittle">{title.substring(0, 30)}...</h3>
        <p className="section__10_card-date">{titleDate}</p>
        <section className="section__10_card-price">
          <div className="section__10_price">
            <span>
              {idr}{" "}
              {price.toLocaleString("id-ID", {
                style: "decimal",
                currency: "IDR",
              })}
            </span>
            <br />
            <span className="section__10_dp">
              {minimumCredits > 0 ? (
                <>
                  {dp} {idr} {"  "}
                  {minimumCredits.toLocaleString("id-ID", {
                    style: "decimal",
                    currency: "IDR",
                  })}
                </>
              ) : null}
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
