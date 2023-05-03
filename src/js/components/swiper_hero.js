import Swiper, { Autoplay, Navigation, Thumbs, Pagination } from 'swiper';
Swiper.use([Autoplay, Navigation, Thumbs, Pagination]);

export const swiper= () => {
  const swiperHero = new Swiper('.swiper-hero', {
    autoplay: {
      delay: 6000,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    loop: true,
    disableOnInteraction: false,
    slidesPerView: 1,
  });

  const swiperOffers = new Swiper('.swiper-offers', {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiperUseful = new Swiper('.swiper-useful', {
    // slidesPerView: 2,
    // spaceBetween: 30,
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      840: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1841: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: '.swiper2-button-next',
      prevEl: '.swiper2-button-prev',
    },
  });

  const swiperModal = new Swiper('.card-slider', {
    slidesPerView: 1,
    watchSlidesProgress: true,
    thumbs: {
      swiper: {
        el: ".card-slider-nav",
        slidesPerView: 4,
      },
    },
  });

  const swiperModalNav = new Swiper('.card-slider-nav', {
    spaceBetween: 70,
    slidesPerView: 'auto',
    // freeMode: true,
    // watchSlidesProgress: true,

  })
}

