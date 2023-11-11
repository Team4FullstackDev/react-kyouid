import Slider from "react-slick";
import ImageCarousel from "../../atoms/ImageCarousel";
import React from "react";

const ImageCarousels = React.forwardRef(({ data, sliderSetting }, ref) => {
  return (
    <Slider ref={ref} className="section__2-carousel" {...sliderSetting}>
      {data.map((item) => (
        <ImageCarousel
          src={item.src}
          className={item.className}
          alt={item.alt}
          key={item.id}
        />
      ))}
    </Slider>
  );
});

ImageCarousels.displayName = "ImageCarousels";

export default ImageCarousels;
