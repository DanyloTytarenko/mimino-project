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
  slidesPerView: 2,
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

const swiper2 = new Swiper('.hero-swiper', {
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
      slidesPerView: 1.3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1.55,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    // when window width is >= 640px
    1440: {
      slidesPerView: 1.6,
      spaceBetween: 10,
    },
  },
});

const swiper3 = new Swiper('.menu-swiper', {
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
  slidesPerView: 1,
  spaceBetween: 50,
  // Responsive breakpoints
});

let init = true;
let desktop = window.matchMedia('(min-width: 1440px)');
if (desktop.matches) {
  swiper.destroy();
  init = false;
} else {
  init = true;
  const swiper3 = new Swiper('.menu-swiper', {
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
    slidesPerView: 1,
    spaceBetween: 50,
    // Responsive breakpoints
  });
}
