$(document).ready(function () {
  $('.main-restaurant-list').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    infinite: false,
    autoplay: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
    ],
  });
  $('.prev-btn').click(function () {
    $('.main-restaurant-list').slick('slickPrev');
  });

  $('.next-btn').click(function () {
    $('.main-restaurant-list').slick('slickNext');
  });
  $('.prev-btn').addClass('slick-disabled');
  $('.main-restaurant-list').on('afterChange', function () {
    if ($(".slick-active[data-slick-index='1']").length) {
      $('.prev-btn').addClass('slick-disabled');
    } else {
      $('.prev-btn').removeClass('slick-disabled');
    }
    if ($(".slick-active[data-slick-index='11']").length) {
      $('.next-btn').addClass('slick-disabled');
    } else {
      $('.next-btn').removeClass('slick-disabled');
    }
  });
});

$(document).ready(function () {
  $('.hero-slider').slick({
    slidesToShow: 1.1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    autoplay: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1.3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.55,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  });
  $('.prev-btn').click(function () {
    $('.hero-slider').slick('slickPrev');
  });

  $('.next-btn').click(function () {
    $('.hero-slider').slick('slickNext');
  });
  $('.prev-btn').addClass('slick-disabled');
  $('.hero-slider').on('afterChange', function () {
    if ($(".slick-active[data-slick-index='0']").length) {
      $('.prev-btn').addClass('slick-disabled');
    } else {
      $('.prev-btn').removeClass('slick-disabled');
    }
    if ($(".slick-active[data-slick-index='2']").length) {
      $('.next-btn').addClass('slick-disabled');
    } else {
      $('.next-btn').removeClass('slick-disabled');
    }
  });
});
