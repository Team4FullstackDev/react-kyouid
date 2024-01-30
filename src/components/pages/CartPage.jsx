import { useSelector } from "react-redux";
import CartItemCard from "../moleculs/CartItemCard";

export default function CartPage() {

  const carts = useSelector((state) => state.user.carts);
  console.log(carts, "dari carts")  

  return (
    <div className="cartsPage__parent-container">
      <div className="cartsPage__content">
        <div className="cartsPage__list">
          <h2>Shopping Cart</h2>
          {
            carts.data.map((item, index) => (
              <CartItemCard key={index} itemCart={item.Product} />
            ))
          }
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
