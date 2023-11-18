import ButtonCarousel from "../../atoms/ButtonCarousel";
import { ButtonCarouselType4 } from "../../../utils/constant/DataSection4";
import ImageCarousels4 from "../../moleculs/SeriesCarousels";
import { section__4Settings } from "../../js-slicks/section4";
import { section4 } from "../../../utils/constant/DataSection4";
import { useRef } from "react";

export default function Section4() {
  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="section4">
      <h3 className="section__4-title">Top Series</h3>
      <div className="section__4-container">
        <div className="section__4-container2">
          <div className="section__4-container3">
            <div className="section__4-content">
              <ButtonCarousel
                type={ButtonCarouselType4.PREV}
                className={"section__4-button-prev section__4-button"}
                onClickHandler={prevSlide}
              />
              <ImageCarousels4
                ref={sliderRef}
                data={section4}
                sliderSetting={section__4Settings}
              />
              <ButtonCarousel
                type={ButtonCarouselType4.NEXT}
                className={"section__4-button-next section__4-button"}
                onClickHandler={nextSlide}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
