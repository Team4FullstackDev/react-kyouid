import { Link } from "react-router-dom";

export default function Section3Card({ imgUrl, title }) {
    return (
      <Link to="wishlist" className="section__3-categories-item">
        <div className="section__3-categories-item-img">
          <img
            src={imgUrl}
            alt=""
            loading="lazy"
          />
        </div>
        <div>
          <h4 className="section__3-categories-item-title">{title}</h4>
        </div>
      </Link>
    );
}