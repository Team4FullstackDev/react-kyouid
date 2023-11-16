import ButtonCarousel from "../../atoms/ButtonCarousel";
import Section1ImageCarousel from "../../moleculs/Section1Carousels";
import { ButtonCarouselType } from "../../../utils/constant/DataSection2";
import useSliderRef from "../../../hooks/UseSliderRef";

function Section__1({ data, sliderSetting }) {
    
  const {
      sliderRef: sliderRef1,
      nextSlide: nextSlide1,
      prevSlide: prevSlide1,
    } = useSliderRef();

  return (
    <section className="section__1">
      <div className="section__1-container">
        <div className="section__1-container2">
          <div className="section__1-container3">
            <div className="section__1-content">
              <ButtonCarousel
                type={ButtonCarouselType.PREV}
                className={"section__1-button-prev section__1-button"}
                onClickHandler={prevSlide1}
              />
              <Section1ImageCarousel
                ref={sliderRef1}
                data={data}
                sliderSetting={sliderSetting}
              />
              <ButtonCarousel
                type={ButtonCarouselType.NEXT}
                className={"section__1-button-next section__1-button"}
                onClickHandler={nextSlide1}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section__1;
