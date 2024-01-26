import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { useParams } from "react-router";

export default function ItemDetail() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9001/api/v1/products/${id}`
        );
        setProduct(response.data.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData();
  }, [id]);

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
  console.log(product);
  return (
    <div className="itemDetail_parent_container">
      <div className="itemDetail_child_first">
        <div className="itemDetail_first_imageContainer">
          <img
            src={
              product.Image_Products &&
              product.Image_Products[0] &&
              product.Image_Products[0].thumbnail
            }
            alt="image item"
          />
        </div>
      </div>
      <div className="itemDetail_child_second">
        <div className="itemDetail_status_container">
          <div
            className="itemDetail_status"
            style={
              product.status === "Ready Stock"
                ? { background: "green" }
                : { color: "red" }
            }
          >
            <span>{product.status}</span>
          </div>
          <div className="itemDetail_share">
            <p>Share</p>
          </div>
        </div>

        <h2 className="itemDetail_title">{product.title}</h2>

        <p className="itemDetail_by">{product.manufacture}</p>

        <hr className="desktop-only" />

        <div className="itemDetail_price_container">
          <h3 className="itemDetail_price">
            IDR {"  "}
            {+product.price &&
              product.price.toLocaleString("id-ID", {
                style: "decimal",
                currency: "IDR",
              })}
          </h3>
          <span className="itemDetail_pointFriendship">
            Earn 140 Friendship point
          </span>
        </div>

        <span className="product-view__content__fp-discount mobileOnly">
          Pay in Full, save IDR 10,000!
        </span>

        <hr className="product-view__content__divider mobileOnly"></hr>

        <h3 className="itemDetail_preOrder-title">Pre-Order Information</h3>

        <div className="itemDetail_dp_container">
          <div className="itemDetail_dp">
            <p className="itemDetail_dp_title">Minumun DP</p>
            <p className="itemDetail_dp_price">{product.minimumCredits}</p>
          </div>
          <div className="itemDetail_fullpayment_discount desktop-only">
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
            <span className="release_value">{product.createdAt}</span>
          </div>
          <div className="itemDetail_eta">
            <span className="eta_key">Estimated Arrival</span>
            <span className="eta_value">December 2023 - January 2024</span>
          </div>
        </div>

        <div className="itemDetail_button_container">
          <div className="mobileOnly">
            <div className="product-view__content__share">
              <button type="button" className="shareButton">
                <img src="https://kyou.id/static/img/icon/share.svg" alt="" />
                <span>Share</span>
              </button>
              <div className="sharer ">
                <a
                  href="https://www.facebook.com/dialog/share?app_id=997410520391321&amp;display=popup&amp;href=https://kyou.id/items/104806/pop-up-parade-figure-ayanami-rei-long-hair-ver-rebuild-of-evangelion-rerelease"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://kyou.id/static/img/icon/Facebook_glyph.svg"
                    alt="facebook"
                  />
                </a>
                <a
                  href="https://social-plugins.line.me/lineit/share?url=https://kyou.id/items/104806/pop-up-parade-figure-ayanami-rei-long-hair-ver-rebuild-of-evangelion-rerelease"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://kyou.id/static/img/icon/Line_glyph.svg"
                    alt="line"
                  />
                </a>
                <a
                  href="https://twitter.com/intent/tweet?text=Ayo cek item Ayanami Rei ini dan puluhan ribu Anime Figure %26 Goods lainnya hanya di Kyou.id!&amp;url=https://kyou.id/items/104806/pop-up-parade-figure-ayanami-rei-long-hair-ver-rebuild-of-evangelion-rerelease"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://kyou.id/static/img/icon/Twitter_glyph.svg"
                    alt="twitter"
                  />
                </a>
              </div>
            </div>
          </div>
          <button className="itemDetail_wishlist" id="AddToWishlist">
            <div>
              <img
                src="https://kyou.id/static/img/icon/wishlist.svg"
                alt="love icon"
              />
            </div>
            <span>
              20
              <span className="desktop-only">&nbsp;Wishlist</span>
            </span>
          </button>
          <button
            className="itemDetail_addtocart"
            onClick={() => dispatch(addToCart(product))}
          >
            <span>
              Add to Cart{" "}
              <img
                src="/Spinner-1s-100px.gif"
                alt="spinner"
                className="itemDetail_spinner"
                // style={{ display: loading ? "block" : "none" }}
              />
            </span>
          </button>
        </div>

        <hr className="desktop-only" />
        <hr className="product-view__content__divider mobileOnly"></hr>

        <div className="itemDetail_description">
          <div className="itemDetail_content_description">
            <h3>About this item</h3>
            <p>{product.description}</p>
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
                <a href="#">{product.character}</a>
              </div>
            </li>
            <li>
              <h4>Series</h4>
              <div className="info">
                <a href="#">{product.series}</a>
              </div>
            </li>
            <li>
              <h4>Category</h4>
              <div className="info">
                <a href="#">{product.category}</a>
              </div>
            </li>
            <li>
              <h4>Manufacture</h4>
              <div className="info">
                <a href="#">{product.manufacture}</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
