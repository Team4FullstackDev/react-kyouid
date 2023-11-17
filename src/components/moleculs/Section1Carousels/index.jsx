import Slider from "react-slick";
import React from "react";
import ImageLink from "../../atoms/ImageLink";

const Section1ImageCarousel = React.forwardRef(({ data, sliderSetting }, ref) => {
  return (
    <Slider ref={ref} className="section__1-carousel" {...sliderSetting}>
      {data.map((item) => (
        <ImageLink
          classNameLink="section__1-images-link"
          src={item.src}
          href={item.href}
          className={item.className}
          alt={item.alt}
          key={item.id}
        />
      ))}
    </Slider>
  );
});

Section1ImageCarousel.displayName = "Section1ImageCarousel";

export default Section1ImageCarousel;
