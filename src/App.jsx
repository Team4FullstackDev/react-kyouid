import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { section__2Settings } from "./components/js-slicks/section2";
import { useEffect, useRef, useState } from "react";
import {
  ButtonCarouselType,
  section2,
  storeData,
} from "./utils/constant/DataSection2";
import ImageCarousel from "./components/atoms/ImageCarousel";
import ImageCarousels from "./components/moleculs/ImageCarousels";
import ButtonCarousel from "./components/atoms/ButtonCarousel";
import StoreItem from "./components/atoms/StoreItem";
import ListStoreItem from "./components/moleculs/ListStoreItem";
import Section10 from "./components/organism/Section10";
import Section2 from "./components/organism/Section2";
import Section7 from "./components/organism/Section7";
import Section8 from "./components/organism/Section8";
import Section9 from "./components/organism/Section9";

function App() {
  const sliderRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const nextSlide = () => {
    console.log("test");
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const handleFilterClick = (e) => {
    setSelectedCategory(e.target.value);
  };
  return (
    <>
      {/* <!-- Header By Harymahayana07 --> */}
      <header>
        {/* <!-- nav mobile hamburger modal--> */}
        <nav className="nav__modal__hamburger">
          <div className="nav__modal-container nav__modal__menu">
            <div className="nav__modal_mobile_top">
              <button type="button" className="nav__modal_button-back">
                <img
                  className="nav__modal_button-img"
                  src="https://kyou.id/static/img/icon/arrow-left.png"
                  alt="Kembali Ke Halaman Utama"
                />
              </button>
              <span>Account</span>
            </div>
            <div className="nav__modal_inner_menu">
              <div className="nav__modal_info_card">
                <img
                  className="nav__modal_img-face"
                  src="https://kyou.id/static/img/icon/face.png"
                  alt="Face Icon Guest"
                />
                <span className="nav__modal_username">Guest</span>
              </div>
              <hr className="nav__modal_hr" />
              <a className="nav__modal_link_menu" href="./login.html">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="67"
                  height="67"
                  viewBox="0 0 67 67"
                  fill="none"
                  className="nav__modal_svg"
                >
                  <path d="M4.25 35H44.149L33.86 45.4781C33.079 46.2581 33.079 47.6201 33.859 48.4011C34.25 48.7921 34.761 49.035 35.274 49.035C35.786 49.035 36.297 48.864 36.688 48.473L49.503 35.6721C49.878 35.2971 50.089 34.794 50.089 34.264C50.089 33.734 49.878 33.228 49.503 32.853L48.895 32.246C48.757 32.046 48.583 31.872 48.382 31.735L36.689 20.042C35.908 19.261 34.641 19.261 33.861 20.042C33.08 20.823 33.08 21.898 33.861 22.68L42.373 31H4.25C3.146 31 2.25 31.896 2.25 33C2.25 34.104 3.146 35 4.25 35Z"></path>
                  <path d="M64.75 59.281V9.541C64.75 4.747 60.842 0 56.003 0H30.002C25.258 0 20.75 4.576 20.75 9.541V21.381C20.75 22.485 21.646 23.381 22.75 23.381C23.854 23.381 24.75 22.485 24.75 21.381V9.541C24.75 6.792 27.471 4 30.002 4H56.003C58.65 4 60.75 6.937 60.75 9.541V59.281C60.75 61.944 58.547 63 56.003 63H30.002C27.637 63 24.75 62.113 24.75 59.281V47.381C24.75 46.277 23.854 45.381 22.75 45.381C21.646 45.381 20.75 46.277 20.75 47.381V59.281C20.75 63.974 24.931 67 30.002 67H56.003C61.188 67 64.75 63.823 64.75 59.281Z"></path>
                </svg>
                Login
              </a>
            </div>
          </div>
        </nav>
        {/* <!-- end nav mobile hamburger modal --> */}

        {/* <!-- nav mobile search modal--> */}
        <nav className="nav__modal__search">
          <div className="nav__modal__search-container nav__modal__search_menu">
            <div className="nav__modal__search_mobile_top">
              <button type="button" className="nav__modal_button-search-back">
                <img
                  className="nav__modal_button-img"
                  src="https://kyou.id/static/img/icon/arrow-left.png"
                  alt="Kembali Ke Halaman Utama"
                />
              </button>
              <form className="nav__modal__search_form">
                <input
                  type="search"
                  placeholder="Khilaf apa hari ini?"
                  name="search"
                  autoComplete="off"
                  value=""
                />
              </form>
            </div>
            <div className="nav__modal__search-content">
              <span className="nav__modal__search-content-label">Riwayat</span>
              <button
                type="button"
                className="nav__modal__search-content-entry"
              >
                Example Searching 1
              </button>
              <button
                type="button"
                className="nav__modal__search-content-entry"
              >
                Example Searching 2
              </button>
              <button
                type="button"
                className="nav__modal__search-content-entry"
              >
                Example Searching 3
              </button>
            </div>
          </div>
        </nav>
        {/* <!-- end nav mobile search modal --> */}

        {/* <!-- nav navigation  --> */}
        <nav className="nav__navigation">
          <button
            type="button"
            id="nav__modal_button-menu"
            className="nav__button_menu"
          >
            <img
              src="https://kyou.id/static/img/icon/menu.svg"
              alt="navbar menu"
            />
          </button>
          <div>
            <a className="nav__icons" href="#">
              <picture className="nav__mascot">
                <img
                  className="nav__mascot"
                  src="https://kyou.id/static/img/logo/mascot.png"
                  alt="img_mascot"
                />
              </picture>
              <picture className="nav__logo-kyou">
                <img
                  className="nav__img-kyou"
                  src="https://kyou.id/static/img/logo/kyou.png"
                  alt="img_kyou"
                />
              </picture>
            </a>
          </div>
          <form className="nav__form_search">
            <input
              className="nav__input_search"
              type="search"
              placeholder="Khilaf apa hari ini?"
            />
            <button type="submit" className="nav__search_submit">
              <img
                src="https://kyou.id/static/img/icon/search.svg"
                alt="search icon"
              />
            </button>
          </form>
          <div className="nav__links">
            <a
              className="nav__button nav__search_mobile"
              id="nav__modal_button-search"
            >
              <img
                className="nav__search_mobile_img"
                src="https://kyou.id/static/img/icon/search_orange.svg"
                alt="Cart Icon"
              />
            </a>
            <a className="nav__button" href="./login.html">
              <img
                className="nav__cart"
                src="https://kyou.id/static/img/icon/cart.svg"
                alt="Cart Icon"
              />
            </a>
            <a className="nav__button" href="./login.html">
              <img
                src="https://kyou.id/static/img/icon/transactions.svg"
                alt="Transactions Icon"
              />
            </a>
            <a className="nav__button nav__wishlist_mobile" href="#">
              <img
                src="https://kyou.id/static/img/icon/wishlist_navbar.svg"
                alt="Wishlist Icon"
              />
            </a>
          </div>
          <div className="nav__signin">
            <a className="nav__text_signin" href="./login.html">
              Sign in
            </a>
          </div>
        </nav>
        {/* <!-- end nav navigation --> */}
      </header>
      {/* <!-- End Header --> */}

      <main>
        {/* <!-- section 1 By Harymahayana07 --> */}
        <section className="section__1">
          <div className="section__1-container">
            <div className="section__1-container2">
              <div className="section__1-container3">
                <div className="section__1-content">
                  <button className="section__1-button-prev section__1-button">
                    <b>‹</b>
                  </button>
                  <div className="section__1-carousel">
                    <a
                      className="section__1-images-link"
                      href="https://kyou.id/search?q=Oshi+no+Ko&amp;page=1%2C40&amp;sort=wishlists&amp;sold=false&amp;showcast=false"
                    >
                      <img
                        className="section__1-images"
                        src="https://cdn.kyou.id/jumbotron/572-622e08db-fc2c-41ef-a30c-c8ee925735e1.jpg"
                        alt="Slider-Gambar-Carousel"
                      />
                    </a>
                    <a
                      className="section__1-images-link"
                      href="https://kyou.id/search?q=Oshi+no+Ko&amp;page=1%2C40&amp;sort=wishlists&amp;sold=false&amp;showcast=false"
                    >
                      <img
                        className="section__1-images"
                        src="https://cdn.kyou.id/jumbotron/660-504c4528-1331-471c-ad91-645a69d7ef43.jpg"
                        alt="Slider-Gambar-Carousel"
                      />
                    </a>
                    <a
                      className="section__1-images-link"
                      href="https://kyou.id/search?q=Oshi+no+Ko&amp;page=1%2C40&amp;sort=wishlists&amp;sold=false&amp;showcast=false"
                    >
                      <img
                        className="section__1-images"
                        src="https://cdn.kyou.id/jumbotron/581-d9359ea2-c7f8-47d4-8d8b-7e112bcf335f.jpg"
                        alt="Slider-Gambar-Carousel"
                      />
                    </a>
                    <a
                      className="section__1-images-link"
                      href="https://kyou.id/search?q=Oshi+no+Ko&amp;page=1%2C40&amp;sort=wishlists&amp;sold=false&amp;showcast=false"
                    >
                      <img
                        className="section__1-images"
                        src="https://cdn.kyou.id/jumbotron/596-93af8181-6b26-46c6-a0ca-1c449bd0eb15.jpg"
                        alt="Slider-Gambar-Carousel"
                      />
                    </a>
                    <a
                      className="section__1-images-link"
                      href="https://kyou.id/search?q=Oshi+no+Ko&amp;page=1%2C40&amp;sort=wishlists&amp;sold=false&amp;showcast=false"
                    >
                      <img
                        className="section__1-images"
                        src="https://cdn.kyou.id/jumbotron/279.jpg"
                        alt="Slider-Gambar-Carousel"
                      />
                    </a>
                    <a
                      className="section__1-images-link"
                      href="https://kyou.id/search?q=Oshi+no+Ko&amp;page=1%2C40&amp;sort=wishlists&amp;sold=false&amp;showcast=false"
                    >
                      <img
                        className="section__1-images"
                        src="https://cdn.kyou.id/jumbotron/685-26aa07c4-b765-4ea6-b405-01e2eaed0985.jpg"
                        alt="Slider-Gambar-Carousel"
                      />
                    </a>
                    <a
                      className="section__1-images-link"
                      href="https://kyou.id/search?q=Oshi+no+Ko&amp;page=1%2C40&amp;sort=wishlists&amp;sold=false&amp;showcast=false"
                    >
                      <img
                        className="section__1-images"
                        src="https://cdn.kyou.id/jumbotron/696-a8862408-2cbb-4bf1-b655-7b10fc1dbf20.jpg"
                        alt="Slider-Gambar-Carousel"
                      />
                    </a>
                    <a
                      className="section__1-images-link"
                      href="https://kyou.id/search?q=Oshi+no+Ko&amp;page=1%2C40&amp;sort=wishlists&amp;sold=false&amp;showcast=false"
                    >
                      <img
                        className="section__1-images"
                        src="https://cdn.kyou.id/jumbotron/697-a073ea24-1017-4bd2-9f3c-6c69b6ebff23.jpg"
                        alt="Slider-Gambar-Carousel"
                      />
                    </a>
                    <a
                      className="section__1-images-link"
                      href="https://kyou.id/search?q=Oshi+no+Ko&amp;page=1%2C40&amp;sort=wishlists&amp;sold=false&amp;showcast=false"
                    >
                      <img
                        className="section__1-images"
                        src="https://cdn.kyou.id/jumbotron/698-f00f7055-1bd9-42f8-b2cb-cc45228e21ba.jpg"
                        alt="Slider-Gambar-Carousel"
                      />
                    </a>
                    <a
                      className="section__1-images-link"
                      href="https://kyou.id/search?q=Oshi+no+Ko&amp;page=1%2C40&amp;sort=wishlists&amp;sold=false&amp;showcast=false"
                    >
                      <img
                        className="section__1-images"
                        src="https://cdn.kyou.id/jumbotron/733-aeb881c8-8139-4d55-be04-96780aa4520e.jpg"
                        alt="Slider-Gambar-Carousel"
                      />
                    </a>
                    <a
                      className="section__1-images-link"
                      href="https://kyou.id/search?q=Oshi+no+Ko&amp;page=1%2C40&amp;sort=wishlists&amp;sold=false&amp;showcast=false"
                    >
                      <img
                        className="section__1-images"
                        src="https://cdn.kyou.id/jumbotron/745-ae09019e-ef88-4ca7-a8fc-e05551c039fc.jpg"
                        alt="Slider-Gambar-Carousel"
                      />
                    </a>
                    <a
                      className="section__1-images-link"
                      href="https://kyou.id/search?q=Oshi+no+Ko&amp;page=1%2C40&amp;sort=wishlists&amp;sold=false&amp;showcast=false"
                    >
                      <img
                        className="section__1-images"
                        src="https://cdn.kyou.id/jumbotron/726-b2fa28c0-31a0-4903-adcb-e6b7605af859.jpg"
                        alt="Slider-Gambar-Carousel"
                      />
                    </a>
                    <a
                      className="section__1-images-link"
                      href="https://kyou.id/search?q=Oshi+no+Ko&amp;page=1%2C40&amp;sort=wishlists&amp;sold=false&amp;showcast=false"
                    >
                      <img
                        className="section__1-images"
                        src="https://cdn.kyou.id/jumbotron/741-e78e5350-d30f-43f9-9a9d-7f6e4a0ae5b8.jpg"
                        alt="Slider-Gambar-Carousel"
                      />
                    </a>
                    <a
                      className="section__1-images-link"
                      href="https://kyou.id/search?q=Oshi+no+Ko&amp;page=1%2C40&amp;sort=wishlists&amp;sold=false&amp;showcast=false"
                    >
                      <img
                        className="section__1-images"
                        src="https://cdn.kyou.id/jumbotron/742-9f5428ff-56f8-4da8-ac93-b96b0b429782.jpg"
                        alt="Slider-Gambar-Carousel"
                      />
                    </a>
                  </div>
                  <button className="section__1-button-next section__1-button">
                    <b>›</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Section --> */}
        {/* <!-- section 2 By Mujahid Ansori Majid --> */}
        <Section2
          sliderRef={sliderRef}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
        {/* <!-- End Section 2--> */}

        {/* <!-- container for section 3 through 10 --> */}
        <div className="container">
          {/* section 7 */}
          <Section7 />
          <Section8 />
          <Section9 />
          {/* <!-- Section 10 created by Endri Nastiar --> */}
          <Section10
            handleClick={handleFilterClick}
            selectedCategory={selectedCategory}
          />
          {/* <!-- End Section 10 by Endri Nastiar --> */}
        </div>
      </main>
    </>
  );
}

export default App;
