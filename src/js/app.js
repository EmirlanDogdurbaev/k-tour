import "bootstrap";

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 1000,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
