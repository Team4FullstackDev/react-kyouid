import Products from "../../moleculs/Products";
import { productSection7 } from "../../../utils/constant/DataSection7";
import Slider from "react-slick";
import { settingsSection7 } from "../../js-slicks/section7";
const Section7 = () => {
  return (
    <section id="section__7">
      <div className="section__7-gallery-slider">
        <div className="section__7-container-col">
          <h3 className="section__7-gallery-slider__tittle">
            Flash Pre Order | Arrives in 2-5 Weeks
          </h3>
          <div className="section__7-gallery-slider__more">
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
        <div className="section__7-gallery-slider__content">
          <Slider {...settingsSection7} className="section__7-container-card">
            <Products data={productSection7} />
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default Section7;
