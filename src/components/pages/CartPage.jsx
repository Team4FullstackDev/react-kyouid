import { Link } from "react-router-dom";

export default function CartPage() {
  return (
    <div className="cartsPage__parent-container">
      <div className="cartsPage__content">
        <div className="cartsPage__list">
          <h2>Shopping Cart</h2>
          <div className="cartsPage__list-item">
            <div className="cartsPage__list-item-info">
              <span className="cartsPage__list-item-category">
                Pre order item
              </span>
              <div className="cartsPage__list-cartlist">
                <div className="cartsPage__list-item-left">
                  <div className="cartsPage__list-item-img">
                    <img
                      src="https://cdn.kyou.id/thumbnail/items/153460-noodle-stopper-figure-gojo-satoru-ending-costume-ver-15cm.jpg"
                      alt="[REVIVE] Noodle Stopper Figure Gojo Satoru - Ending Costume Ver. (15cm)"
                    ></img>
                  </div>
                  <div className="cartsPage__list-item-details">
                    <span className="cartsPage__list-item-name">
                      <Link to={"/items/1"}>
                        <div>
                          [REVIVE] Noodle Stopper Figure Gojo Satoru - Ending
                          Costume Ver. (15cm)
                        </div>
                      </Link>
                    </span>
                    <span className="cartsPage__list-item-price desktop-only">
                      IDR 200.000
                    </span>
                    <div
                      className="cartsPage__list-item-buttons desktop-only"
                      style={{ minWidth: "76px" }}
                    >
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
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                  <div className="cartsPage__eta desktop-only">
                    <span className="cartsPage__eta-label">
                      Estimated Arrival
                    </span>
                    <span className="cartsPage__eta-value">
                      December 2023 - January 2024
                    </span>
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
                      IDR 200,000
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
                    <span className="cartlist__total__value">IDR 200,000</span>
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
          <div className="cartsPage__list-item">
            <div className="cartsPage__list-item-info">
              <span className="cartsPage__list-item-category">
                Pre order item
              </span>
              <div className="cartsPage__list-cartlist">
                <div className="cartsPage__list-item-left">
                  <div className="cartsPage__list-item-img">
                    <img
                      src="https://cdn.kyou.id/thumbnail/items/153460-noodle-stopper-figure-gojo-satoru-ending-costume-ver-15cm.jpg"
                      alt="[REVIVE] Noodle Stopper Figure Gojo Satoru - Ending Costume Ver. (15cm)"
                    ></img>
                  </div>
                  <div className="cartsPage__list-item-details">
                    <span className="cartsPage__list-item-name">
                      <Link to={"/items/1"}>
                        <div>
                          [REVIVE] Noodle Stopper Figure Gojo Satoru - Ending
                          Costume Ver. (15cm)
                        </div>
                      </Link>
                    </span>
                    <span className="cartsPage__list-item-price desktop-only">
                      IDR 200.000
                    </span>
                    <div
                      className="cartsPage__list-item-buttons desktop-only"
                      style={{ minWidth: "76px" }}
                    >
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
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                  <div className="cartsPage__eta desktop-only">
                    <span className="cartsPage__eta-label">
                      Estimated Arrival
                    </span>
                    <span className="cartsPage__eta-value">
                      December 2023 - January 2024
                    </span>
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
                      IDR 200,000
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
                    <span className="cartlist__total__value">IDR 200,000</span>
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
                        src="https://kyou.id/static/img/icon/trash.png"
                        alt="delete"
                      />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cartsPage__checkout ">
        <div className="cartsPage__checkout-total">
          <span className="cartsPage__checkout-total-label">TOTAL PRICE</span>
          <span className="cartsPage__checkout-total-value">IDR 1,059,000</span>
        </div>
        <button
          type="button"
          className="cartsPage__checkout-button"
          id="Checkout"
        >
          CHECKOUT
        </button>
        <hr className="desktop-only" />
        <p className="desktop-only">
          Shipping fee will be calculated when checkout
        </p>
        <p className="desktop-only">
          If choosing DP as payment option, shipping fee will be invoiced when
          the item is arrived.
        </p>
      </div>
    </div>
  );
}
