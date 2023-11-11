import { ButtonCarouselType } from "../../../utils/constant/DataSection2";

export default function ButtonCarousel({ onClickHandler, className, type }) {
  return (
    <button onClick={onClickHandler} className={className}>
      <b>{type === ButtonCarouselType.PREV ? "‹" : "›"}</b>
    </button>
  );
}
