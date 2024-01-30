import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCart } from "../../../redux/actions/carts.action";
import { useState } from "react";

export default function CartItemCard({ itemCart }) {
  const dispatch = useDispatch();

  return (
    <div className="cartsPage__list-item">
      <div className="cartsPage__list-item-info">
        <span className="cartsPage__list-item-category">
          {itemCart.category}
        </span>
        <div className="cartsPage__list-cartlist">
          <div className="cartsPage__list-item-left">
            <div className="cartsPage__list-item-img">
              <img
                src={itemCart.img}
                alt="[REVIVE] Noodle Stopper Figure Gojo Satoru - Ending Costume Ver. (15cm)"
              ></img>
            </div>
            <div className="cartsPage__list-item-details">
              <span className="cartsPage__list-item-name">
                <Link to={`/items/${itemCart.id}`}>
                  <div>{itemCart.title}</div>
                </Link>
              </span>
              <span className="cartsPage__list-item-price desktop-only">
                {itemCart.prevPrice}
              </span>
              <div className="cartsPage__list-item-buttons desktop-only">
                <button>
                  <img
                    src="https://kyou.id/static/img/icon/wishlist_active.svg"
                    alt="wishlist"
                  ></img>
                  <span>Wishlist</span>
                </button>
                <button>
                  <img
                    src="https://kyou.id/static/img/icon/trash.png"
                    alt="delete"
                  ></img>
                  <span
                    onClick={() => {
                      dispatch(deleteCart(itemCart.id));
                    }}
                  >
                    Delete
                  </span>
                </button>
              </div>
            </div>
            <div className="cartsPage__eta desktop-only">
              <span className="cartsPage__eta-label">Estimated Arrival</span>
              <span className="cartsPage__eta-value">{itemCart.createdAt}</span>
            </div>
          </div>
          <div className="cartsPage__list-item-right">
            <div className="cartsPage__list-amount">
              <span className="cartsPage__list-amount-label desktop-only">
                Quantity
              </span>
              <div className="cartsPage__list-amount-control">
                <button>-</button>
                <span>
                  <input type="text" disabled value={1} />
                </span>
                <button>+</button>
              </div>
            </div>
            <div className="cartsPage__list-total">
              <span className="cartsPage__list-label desktop-only">
                Subtotal
              </span>
              <span className="cartsPage__list-value desktop-only">
                {"IDR "}
                {itemCart.price.toLocaleString("id-ID", {
                  style: "decimal",
                  currency: "IDR",
                })}
              </span>
              <span className="cartsPage__list-stock-alert">
                <img
                  className="cartlist__total__stock-alert__exclamation"
                  src="/static/img/icon/danger_filled.svg"
                  alt=""
                />
                Limited Slot
              </span>
            </div>
          </div>
          <div
            className="cartlist__details mobile-only"
            style={{ marginTop: "16px" }}
          >
            <div className="cartlist__total" style={{ flexGrow: "1" }}>
              <span className="cartlist__total__label">Subtotal</span>
              <span className="cartlist__total__value">
                {" "}
                {itemCart.price.toLocaleString("id-ID", {
                  style: "decimal",
                  currency: "IDR",
                })}
              </span>
            </div>
            <div className="cartlist__details__buttons">
              <button type="button">
                <img
                  src="http://kyou.id/static/img/icon/wishlist_active.svg"
                  alt="wishlist"
                />
                <span>Wishlist</span>
              </button>
              <button type="button">
                <img
                  src="https:///kyou.id/static/img/icon/trash.png"
                  alt="delete"
                />
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
