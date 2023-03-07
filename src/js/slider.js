import Swiper, { Navigation } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../css/slider.css';
const swiper = new Swiper('.swiper-restaurant', {
  // Optional parameters
  modules: [Navigation],
  direction: 'horizontal',
  navigation: true,
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1.5,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    // when window width is >= 640px
    1440: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});
