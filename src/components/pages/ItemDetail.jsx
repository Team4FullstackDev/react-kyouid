import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/carts.action";

export default function ItemDetail() {
  const product = useSelector((state) => state.itemDetail.detailProducts);
  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const onChangeQuantity = (e) => {
    const value = e.target.value;
    if (value >= 1 && value <= 3) {
      setQuantity(value);
    }
  };

  const increment = () => {
    if (quantity < 3) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="itemDetail_parent_container">
      <div className="itemDetail_child_first">
        <div className="itemDetail_first_imageContainer">
          <img src={product.img} alt="image item" />
        </div>
      </div>
      <div className="itemDetail_child_second">
        <div className="itemDetail_status_container">
          <div
            className="itemDetail_status"
            style={{ backgroundColor: product.reviews?.backgroundColor }}
          >
            <span>{product.reviews?.text}</span>
          </div>
          <div className="itemDetail_share">
            <p>Share</p>
          </div>
        </div>

        <h2 className="itemDetail_title">{product.title}</h2>

        <p className="itemDetail_by">By Bandai Spirits</p>

        <hr />

        <div className="itemDetail_price_container">
          <h3 className="itemDetail_price">{product.prevPrice}</h3>
          <span className="itemDetail_pointFriendship">
            Earn 140 Friendship point
          </span>
        </div>

        <div className="itemDetail_dp_container">
          <div className="itemDetail_dp">
            <p className="itemDetail_dp_title">Minumun DP</p>
            <p className="itemDetail_dp_price">{product.newPrice}</p>
          </div>
          <div className="itemDetail_fullpayment_discount">
            <p className="itemDetail_fullpayment_discount_title">
              Fullpayment Discount
            </p>
            <p className="itemDetail_fullpayment_discount_price">IDR 10.000</p>
          </div>
        </div>

        <div className="itemDetail_quantity">
          <span>Qty</span>
          <button onClick={decrement}>-</button>
          <input
            type="number"
            max={3}
            min={1}
            value={quantity}
            onChange={onChangeQuantity}
          />
          <button onClick={increment}>+</button>
        </div>

        <div className="itemDetail_release_eta">
          <div className="itemDetail_release">
            <span className="release_key">Releases</span>
            <span className="release_value">{product.titleDate}</span>
          </div>
          <div className="itemDetail_eta">
            <span className="eta_key">Estimated Arrival</span>
            <span className="eta_value">December 2023 - January 2024</span>
          </div>
        </div>

        <div className="itemDetail_button_container">
          <button className="itemDetail_wishlist" id="AddToWishlist">
            <div>
              <img
                src="https://kyou.id/static/img/icon/wishlist.svg"
                alt="love icon"
              />
            </div>
            <span>
              20
              <span>&nbsp;Wishlist</span>
            </span>
          </button>
          <button
            className="itemDetail_addtocart"
            onClick={() => dispatch(addToCart(product))}
          >
            <span>
              Add to Cart <img src="/Spinner-1s-100px.gif" alt="spinner" className="itemDetail_spinner" style={{ display: loading ? "block" : "none" }} />
            </span>
          </button>
        </div>

        <hr />

        <div className="itemDetail_description">
          <div className="itemDetail_content_description">
            <h3>About this item</h3>
            <div>
              <span>
                <br />
              </span>
            </div>
          </div>
          <hr className="itemDetail_content_deciver mobileOnly" />
          <ul className="itemDetail_content_detail">
            <li>
              <h4>Character</h4>
              <div className="info">
                <a href="#">Hinana Ichikawa</a>
              </div>
            </li>
            <li>
              <h4>Series</h4>
              <div className="info">
                <a href="#">The iDOLM@STER</a>
              </div>
            </li>
            <li>
              <h4>Category</h4>
              <div className="info">
                <a href="#">Prize Figure</a>
              </div>
            </li>
            <li>
              <h4>Manufacture</h4>
              <div className="info">
                <a href="#">Bandai Spirits</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
