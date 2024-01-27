import { productSection9 } from "../../../utils/constant/DataSection9";
import Slider from "react-slick";
import Card from "../../atoms/Card";
import { useEffect, useRef } from "react";
import ButtonSlider from "../../atoms/ButtonSlider";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductById } from "../../../redux/slice/productById.slice";
import { getProducts } from "../../../redux/slice/products.slice";
const Section9 = () => {
  const sliderRef = useRef(null);
  const product = useSelector((state) => state.products);
  console.log(product);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
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

  return (
    <section id="section__9">
      <div className="section__9-gallery-slider">
        <div className="section__9-container-col">
          <h3 className="section__9-gallery-slider__tittle">
            For you, Genshin Traveler!
          </h3>
          <div className="section__9-gallery-slider__more">
            <a className="" href="wishlist.html">
              Lihat Semua {""}
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
        <div className="section__9-gallery-slider__content">
          <ButtonSlider
            onClickHandler={previous}
            classname="section__9-button-slider-prev
            "
            text="‹"
          />
          {product.loading && <p>Loading</p>}
          {!product.loading && product.error ? (
            <p> error :{product.error}</p>
          ) : null}
          {!product.loading && product.products.length ? (
            <Slider
              className="section__9-container-card"
              ref={sliderRef}
              {...settings}
            >
              {product.products.map((product) => (
                <Link key={product.id} to={`/items/${product.id}`}>
                  <Card
                    key={product.id}
                    img={
                      product.Image_Products &&
                      product.Image_Products[0] &&
                      product.Image_Products[0].thumbnail
                    }
                    title={product.title}
                    titleDate={product.createdAt}
                    status={product.status}
                    price={product.price}
                    minimumCredits={product.minimumCredits}
                    onClickHandler={() => dispatch(getProductById(product))}
                    dp="DP"
                    idr="IDR"
                  />
                </Link>
              ))}
            </Slider>
          ) : null}

          <ButtonSlider
            onClickHandler={next}
            classname="section__9-button-slider-next
            "
            text="›"
          />
        </div>
      </div>
    </section>
  );
};
export default Section9;
