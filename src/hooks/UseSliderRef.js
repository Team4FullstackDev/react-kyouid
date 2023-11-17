import { useRef } from "react";

const useSliderRef = () => {
  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return { sliderRef, nextSlide, prevSlide };
};

export default useSliderRef;
