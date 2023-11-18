import ButtonCarousel from "../../atoms/ButtonCarousel";
import { ButtonCarouselType } from "../../../utils/constant/DataSection2";
import ImageCarousels from "../../moleculs/ImageCarousels";
import { section__2Settings } from "../../js-slicks/section2";
import { section2, storeData } from "../../../utils/constant/DataSection2";
import ListStoreItem from "../../moleculs/ListStoreItem";
import { useRef } from "react";
export default function Section2() {
  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="section__2">
      <div className="section__2-container">
        <article className="section__2-container-shopping">
          <div className="section__2-container-shopping-left">
            <span className="section__2-shopping-caption">
              Ngaku2 Waifu Keqing
              <br />
              Ehh, besoknya pake Ayaka mau adain Community Gathering?
              <br />
              Gath di Alpha Store jawabannya!
            </span>
            <button className="section__2-button">
              <a href="https://kyou.id/stores">Cakep! Shelok Kyou!</a>
            </button>
          </div>
          <div className="section__2-container-shopping-right">
            <ButtonCarousel
              type={ButtonCarouselType.PREV}
              className={"section__2-button-prev section__2-button-carousel"}
              onClickHandler={prevSlide}
            />
            <ImageCarousels
              ref={sliderRef}
              data={section2}
              sliderSetting={section__2Settings}
            />
            <ButtonCarousel
              type={ButtonCarouselType.NEXT}
              className={"section__2-button-next section__2-button-carousel"}
              onClickHandler={nextSlide}
            />
          </div>
        </article>
        <article className="section__2-container-shopping">
          <a href="#" className="section__2-title-button">
            UNIQUE REQUEST
            <img
              src="	https://kyou.id/static/img/icon/urtick.svg"
              alt="badge"
              className="section__2-badge"
            />
          </a>
          <h3 className="section__2-title-description">
            Belanja barang dari jepang semudah copy link!
          </h3>
          <div className="section__2-container-list-store">
            <ListStoreItem data={storeData} />
          </div>
          <button className="section__2-store-button">
            Cobain Unique Request
          </button>
        </article>
      </div>
    </section>
  );
}
