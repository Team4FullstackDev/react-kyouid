import Slider from "react-slick";
import React from "react";
import SliderSeries from "../../atoms/SliderSeries";

const ImageCarousels4 = React.forwardRef(({ data, sliderSetting }, ref) => {
    return (
      <Slider ref={ref} className="section__1-carousel" {...sliderSetting}>
        {data.map((item) => (
          <SliderSeries
            classNameLink="section__4-img"
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

ImageCarousels4.displayName = "ImageCarousels4";

export default ImageCarousels4;
