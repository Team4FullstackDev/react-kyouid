import { DataSection5 } from "../../../utils/constant/DataSection5";
import Slider from "react-slick";
import Card from "../../atoms/Card";
import { useRef } from "react";
import ButtonSlider from "../../atoms/ButtonSlider";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProductDetail } from "../../../redux/slice/itemdetail.slice";

const Section5 = () => {
  const sliderRef = useRef(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const settings = {
    arrows: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dispatch = useDispatch();

  return (
    <section id="section__5">
      <div className="section__5-gallery-slider">
        <div className="section__5-container-col">
          <h3 className="section__5-gallery-slider__tittle">
          Most Liked
          </h3>
          <div className="section__5-gallery-slider__more">
            <Link className="" to="/wishlist">
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
            </Link>
          </div>
        </div>

         <div class="section__5-gallery-slider__content">
          <ButtonSlider
            onClickHandler={previous}
            classname="section__5-button-slider-prev
            "
            text="‹"
          />
          <Slider
            className="section__5-container-card"
            ref={sliderRef}
            {...settings}
          >
            {DataSection5.map((product) => (
              <Link key={product.id} to={`/items/${product.id}`}>
                <Card
                  img={product.img}
                  title={product.title}
                  titleDate={product.titleDate}
                  reviews={product.reviews}
                  prevPrice={product.prevPrice}
                  newPrice={product.newPrice}
                  onClickHandler={() => dispatch(getProductDetail(product))}
                  dp="DP"
                  idr="IDR"
                />
              </Link>
            ))}
          </Slider>

          <ButtonSlider
            onClickHandler={next}
            classname="section__5-button-slider-next
            "
            text="›"
          />
        </div>
      </div>
    </section>
  );
};
export default Section5;
