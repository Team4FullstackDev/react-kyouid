// $(document).ready(function () {
//   $(".section__1-carousel").slick({
//     autoplay: true,
//     autoplaySpeed: 2500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     focusOnSelect: true,
//     nextArrow: false,
//     prevArrow: false,
//     infinite: true,
//     responsive: [
//       {
//         breakpoint: 721,
//         settings: {
//           autoplay: true,
//           autoplaySpeed: 2500,
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           centerMode: true,
//           focusOnSelect: true,
//           nextArrow: false,
//           prevArrow: false,
//           infinite: true,
//         },
//       },
//     ],
//   });

//   $(".section__1-button-prev").on("click", function () {
//     $(".section__1-carousel").slick("slickPrev");
//   });

//   $(".section__1-button-next").on("click", function () {
//     $(".section__1-carousel").slick("slickNext");
//   });
// });

export const section__1Settings = {
  autoplay: true,
  autoplaySpeed: 2500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  focusOnSelect: true,
  nextArrow: false,
  prevArrow: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 721,
      settings: {
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        nextArrow: false,
        prevArrow: false,
        infinite: true,
      },
    },
  ],
};
