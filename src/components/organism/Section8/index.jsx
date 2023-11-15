import Products from "../../moleculs/Products";
import { productSection8 } from "../../../utils/constant/DataSection8";
const Section8 = () => {
  return (
    <section id="section__8">
      <div className="section__8-gallery-slider">
        <div className="section__8-container-col">
          <h3 className="section__8-gallery-slider__tittle">
            Back by Popular Demand!
          </h3>
          <div className="section__8-gallery-slider__more">
            <a className="" href="wishlist.html">
              Lihat Semua
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="10"
                viewBox="0 0 24.912 17.517"
              >
                <defs></defs>
                <path
                  id="right-arrow"
                  d="M16.775 4.937A.883.883 0 1 0 15.52 6.18l6.366 6.366H.879a.875.875 0 0 0-.879.88.884.884 0 0 0 .879.892h21.007l-6.366 6.354a.9.9 0 0 0 0 1.255.88.88 0 0 0 1.255 0l7.873-7.873a.865.865 0 0 0 0-1.243z"
                  className="cls-1"
                  transform="translate(0 -4.674)"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="section__8-gallery-slider__content">
          <div className="section__8-container-card">
            <Products data={productSection8} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section8;
